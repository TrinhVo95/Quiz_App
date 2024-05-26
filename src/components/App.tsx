import { Link } from "react-router-dom";
import "../styles/App.css";

const App = () => {
  return (
    <div className="container">
      <div className="main-content">
        <h1 className="title">Quizard </h1>
        <div className="start">
          <Link className="btn" to={"/login"}>
            Start Quiz
          </Link>
        </div>
        <div className="image1"></div>
        <div className="image2"></div>
        <div className="image3"></div>
        <div className="image4"></div>
      </div>
    </div>
  );
};

export default App;
