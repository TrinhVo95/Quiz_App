import { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";

type resultType = {
  userId: string | null;
  earnPoints: number;
  totalQuestion: number;
  flag: boolean;
};

const ResultTable = ({
  userId,
  earnPoints,
  totalQuestion,
  flag,
}: resultType) => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   getServerData("http://localhost:5000/api/result");
  // });
  return (
    <div>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Questions</td>
            <td>Attemps</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          <tr className="table-body">
            <td>{userId}</td>
            <td>{totalQuestion}</td>
            <td>{earnPoints}</td>
            <td style={{ backgroundColor: `${flag ? "green" : "red"} ` }}>
              {flag ? "Passed" : "Failed"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
