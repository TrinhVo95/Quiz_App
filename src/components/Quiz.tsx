import { useDispatch, useSelector } from "react-redux";
import Questions from "./Questions";
import { useState } from "react";
import { RootState } from "./redux/store";
import { moveNextAction, movePrevAction } from "./redux/question_reducer";
import { resultAction } from "./redux/result_reducer";
import { Navigate } from "react-router-dom";

const Quiz = () => {
  const [check, setCheck] = useState(undefined);
  const result = useSelector((state: RootState) => state.result.result);
  const { queue, trace } = useSelector((state: RootState) => state.questions);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log(trace, result, queue);
  // });

  const onNext = () => {
    // console.log("next");
    if (trace < queue.length) {
      dispatch(moveNextAction());
      if (result.length <= trace) {
        dispatch(resultAction(check));
      }
    }
    setCheck(undefined);
  };
  const onPrev = () => {
    // console.log("prev");
    if (trace > 0) {
      dispatch(movePrevAction());
    }
  };
  const onChecked = (check: any) => {
    setCheck(check);
    // console.log(check);
  };

  // console.log(queue);

  //finish exam after the last question
  if (result.length && result.length === queue.length) {
    return <Navigate to={"/result"} replace={true}></Navigate>;
  }

  return (
    <div className="container">
      <div className="main-content">
        <Questions onChecked={onChecked} />

        <div className="grid">
          {trace > 0 ? (
            <button className="prev" onClick={onPrev}>
              Prev
            </button>
          ) : (
            <div></div>
          )}
          {trace < queue.length ? (
            <button className="next" onClick={onNext}>
              Next
            </button>
          ) : (
            <div></div>
          )}
        </div>
        <div className="image6"></div>
      </div>
    </div>
  );
};

export default Quiz;
