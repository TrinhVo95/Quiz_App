import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as Action from "../components/redux/question_reducer";
import { getServerData } from "../helper/helper";

export type Data = {
  id: number;
  question: string;
  options: string[];
};
//fetch api data and set value to store
export type GetDataState = {
  isLoading: boolean;
  apiData: Data[];
  serverError: any;
};
export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState<GetDataState>({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));
    (async () => {
      try {
        const [{ questions, answers }] = await getServerData(
          "https://testapi-tan-five.vercel.app/api/questions"
        );
        // console.log(process.env.REACT_APP_SERVER_HOSTNAME);
        if (questions?.length > 0) {
          setGetData((prev) => ({
            ...prev,
            isLoading: false,
            apiData: questions,
          }));

          dispatch(Action.startExamAction({ question: questions, answers }));
        } else {
          throw new Error("No question Available");
        }
      } catch (error) {
        setGetData((prev) => ({
          ...prev,
          isLoading: false,
          serverError: error,
        }));
      }
    })();
  }, [dispatch]);
  return [getData, setGetData];
};
