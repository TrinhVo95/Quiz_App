import { useSelector } from "react-redux";
import { RootState } from "../components/redux/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export const attemps_Number = (result: number[]) => {
  return result.filter((r) => r !== undefined).length;
};

export const eartPoints_Number = (result: any[], answers: any[]) => {
  return result
    .map((element, index) => answers[index] === element)
    .filter((i) => i).length;
};

export const flagResult = (totalPoints: number, earnPoints: number) => {
  return earnPoints >= totalPoints / 2;
};

// user auth

export const CheckUserExist = ({ children }: any) => {
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.result.userId);
  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, [auth, navigate]);

  return auth ? children : null;
};

// get server data

export const getServerData = async (url: string) => {
  const data = await axios.get(url);
  // console.log(data.data);
  return data.data;
};

export const postServerData = async (
  url: string,
  result: any,
  p0: (data: any) => any
) => {
  const data = await axios.post(url, result);
  // console.log(data);
  return data.data;
};

export const userPublishResult = (resultData: {
  result: string[];
  userName: string | null;
  earnPoints: number;
  achives: string;
}) => {
  const { result, userName } = resultData;

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  async () => {
    try {
      if (result.length !== 0 && !userName)
        throw new Error("Couldn't get result");
      await postServerData(
        "https://testapi-tan-five.vercel.app/api/result",
        resultData,
        (data) => data
      );
    } catch (error) {
      console.log(error);
    }
  };
};
