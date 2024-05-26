import { useEffect, useState } from "react";
import { Data, GetDataState, useFetchQuestion } from "../hooks/FetchQuestion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { updateAction } from "./redux/result_reducer";
import { Link } from "react-router-dom";

const Questions = ({ onChecked }: any) => {
  const [checked, setChecked] = useState<(number | undefined)[]>([]);
  const [fetchDataState, setFetchDataState] = useFetchQuestion(); // Destructure the entire array

  // Destructure the state properties
  const { isLoading, apiData, serverError } = fetchDataState as GetDataState;
  const dispatch = useDispatch();
  const { trace } = useSelector((state: RootState) => state.questions);

  // const result = useSelector((state: RootState) => state.result.result);
  // console.log(result, trace);

  const questions: Data = useSelector(
    (state: RootState) => state.questions.queue[state.questions.trace]
  );

  useEffect(() => {
    dispatch(updateAction({ trace, checked }));
  }, [checked, dispatch, trace]);

  const onSelect = (index: number) => {
    // setChecked()
    // console.log("index", index);

    onChecked(index);
    const updatedChecked = [...checked];
    updatedChecked[questions.id] = index;
    setChecked(updatedChecked);
  };

  if (isLoading) return <h3 className="text-light">isLoading</h3>;
  if (serverError)
    return (
      <div className="error-container">
        {/* <img src={ErrorGif} alt="Error Gif" /> */}
        <h1 className="err">
          4 <span className="emoji"></span>4
        </h1>
        <p style={{ color: "#fff", textAlign: "center" }}>
          Oops! Something went wrong. Please try again later.
        </p>
        <Link to={"/"} className="btn">
          Go To Homepage
        </Link>
      </div>
    );

  return (
    <div className="questions">
      <p className="content-title">
        Question {questions?.id} out of {apiData.length}
      </p>
      <p className="question">{questions?.question}</p>
      <ul key={questions?.id}>
        {questions?.options.map((option, index) => (
          <li
            className={`${checked[questions?.id] === index ? "checked" : ""}`}
            key={index}
            onClick={() => onSelect(index)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
