import React, { useEffect, useState } from "react";
import loadingGif from "../assets/loading.gif";
import errorPicture from "../assets/error.jpg";
import backtracking from "../algorithms/back-tracking";
// import backTrackingWithMRV from "../algorithms/back-tracking-with-MRV";

const Solver = ({
  setIsSolving,
  setIsSolved,
  boardData,
  setBoardData,
  algorithm,
}) => {
  const [processing, setIsProccessing] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (algorithm === "backtracking") {
        let answer = backtracking(boardData);
        if (answer === false) setIsProccessing(false);
        else {
          setIsSolved(true);
          setBoardData(answer);
          setIsSolving(false);
        }
        //   } else if (algorithm === "backTrackingWithMRV") {
        //     let answer = backTrackingWithMRV(boradData);
        //     if (answer === false) setIsProccessing(false);
        //     else {
        //       setIsSolved(true);
        //       setBoradData(answer);
        //       setIsSolving(false);
        //     }
      }
    });
    return () => clearTimeout(timer);
  }, [
    algorithm,
    boardData,
    setBoardData,
    setIsProccessing,
    setIsSolving,
    setIsSolved,
  ]);
  return (
    <div>
      {processing ? (
        <div className={"text-center p-5 w-max mx-auto"}>
          <img src={loadingGif} alt="loading..." />
        </div>
      ) : (
        <div className={"text-center p-5 mt-10 w-max mx-auto"}>
          <img
            src={errorPicture}
            alt="Error"
            className="bg-blue-400 w-max mx-auto"
          />
          <div className={"text-4xl text-gray-700 mt-10"}>
            This board dosn't have any solution
          </div>
          <button
            onClick={(e) => {
              setIsSolving(false);
            }}
            className="bg-red-600 mt-5 text-white px-3 py-2 rounded-lg cursor-pointer hover:bg-red-900 transition shadow-lg"
          >
            Back to main screen
          </button>
        </div>
      )}
    </div>
  );
};

export default Solver;
