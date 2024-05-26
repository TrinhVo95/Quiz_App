import { createBrowserRouter } from "react-router-dom";
import { CheckUserExist } from "../helper/helper";
import Quiz from "../components/Quiz";
import Result from "../components/Result";
import App from "../components/App";
import Main from "../components/Main";
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Main />,
  },
  {
    path: "/quiz",
    element: (
      <CheckUserExist>
        <Quiz />
      </CheckUserExist>
    ),
  },
  {
    path: "/result",
    element: (
      <CheckUserExist>
        <Result />
      </CheckUserExist>
    ),
  },
]);

export default router;
