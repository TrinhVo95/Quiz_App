import { Link } from "react-router-dom";
import "../styles/Result.css";
// import ResultTable from "./ResultTable";
import { useDispatch, useSelector } from "react-redux";
import { resetResultAction } from "./redux/result_reducer";
import { resetAllAction } from "./redux/question_reducer";
import { RootState } from "./redux/store";
import pics from "../image/img7.png";

import {
  // attemps_Number,
  eartPoints_Number,
  flagResult,
  userPublishResult,
} from "../helper/helper";

const Result = () => {
  const dispatch = useDispatch();
  // const {
  //   questions: { queue, answers },
  //   result: { result, userId },
  // } = useSelector((state: RootState) => state);
  const result = useSelector((state: RootState) => state.result.result);
  const userId = useSelector((state: RootState) => state.result.userId);
  const queue = useSelector((state: RootState) => state.questions.queue);
  const answers = useSelector((state: RootState) => state.questions.answers);

  const totalQuestion = queue.length;
  //const attempts = attemps_Number(result); //store result is not undefined
  const earnPoints = eartPoints_Number(result, answers);

  const flag = flagResult(totalQuestion, earnPoints);

  // store user result
  userPublishResult({
    result,
    userName: userId,
    earnPoints,
    achives: flag ? "Passed" : "Failed",
  });
  const handleRestart = () => {
    // console.log("Restart");
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  };
  return (
    <div className="container">
      <div className="main-content">
        <h1 className="title text-light">Congrats!</h1>
        <div className="score">YOUR SCORE</div>
        <div className="point">
          {earnPoints}/{totalQuestion}
        </div>
        <div className="img">
          <img src={pics} alt="" />
        </div>
        <div className="start">
          <Link className="btn" to={"/"} onClick={handleRestart}>
            Play Again
          </Link>
        </div>
        <div className="image6"></div>
      </div>

      {/* <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">{userId}</span>
        </div>

        <div className="flex">
          <span>Total Questions : </span>
          <span className="bold">{totalQuestion || 0}</span>
        </div>
        <div className="flex">
          <span>Total Attempts : </span>
          <span className="bold">{earnPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Quiz Result </span>
          <span
            style={{ color: `${flag ? "green" : "red"} ` }}
            className="bold"
          >
            {flag ? "Passed" : "Failed"}
          </span>
        </div>
      </div> */}

      {/* <div className="container">
        <ResultTable
          userId={userId}
          earnPoints={earnPoints}
          totalQuestion={totalQuestion}
          flag={flag}
        />
      </div> */}
    </div>
  );
};

export default Result;
