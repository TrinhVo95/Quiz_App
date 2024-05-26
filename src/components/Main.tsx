import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserId } from "./redux/result_reducer";
import "../styles/App.css";

const Main = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const [errorMes, setErrorMes] = useState(false);
  const handleStart = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // console.log("Input value:", inputRef.current?.value);
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current.value));
    } else {
      event.preventDefault();
      // alert("zdgd");
      setErrorMes(true);
      // console.log("errorMes:", errorMes);
    }
  };
  return (
    <div className="container">
      <div className="main-content">
        <h1 className="main-title">Let's play!</h1>
        <div className="main">Join Quizard and invite friends</div>
        <div className="content">
          <ol className="list">
            <li>You will be asked 10 questions one after another</li>
            <li>
              Each question has three options. You can choose only one options
            </li>
            <li>You can review and change answer before the quiz finish </li>
            <li>The result will be declared at the end of the quiz</li>
          </ol>
          <form id="form">
            <label htmlFor="userid">Enter your name</label>
            <input
              id="userid"
              ref={inputRef}
              className="userid"
              type="text"
              placeholder="Username ..."
            />
            {errorMes && <div className="error">Please enter your name</div>}
          </form>
          <div className="start-btn">
            <Link className="button" to={"/quiz"} onClick={handleStart}>
              Play now
            </Link>
          </div>
        </div>

        <div className="image5"></div>
      </div>
    </div>
  );
};

export default Main;
