import React, { useState } from "react";
import Header from "./components/Header";
import IOScreen from "./components/IOScreen";
import Solver from "./components/Solver";
import Carousel from "./slick-carousel/carousel";
import NormalCarousel from "./slick-carousel/normal-carousel";
import W3SchoolCarousel from "./slick-carousel/w3-school-carousel";
import Linkedin from "./linkedin/linkedin";
import Counter from "./counter/counter";

const App = () => {
  const [carousel, setCarousel] = useState(true);
  const [boardData, setBoardData] = useState([
    [3, 5, 1, 6, 0, 2, 0, 0, 4],
    [0, 0, 7, 5, 0, 9, 6, 0, 0],
    [4, 0, 0, 8, 3, 0, 0, 5, 7],
    [9, 4, 0, 0, 0, 7, 0, 3, 2],
    [0, 0, 0, 3, 9, 6, 0, 0, 5],
    [0, 7, 3, 0, 8, 0, 1, 0, 0],
    [7, 3, 4, 0, 0, 0, 0, 0, 0],
    [8, 0, 0, 7, 0, 0, 4, 2, 9],
    [0, 9, 2, 4, 0, 5, 3, 0, 0],
  ]);
  const [setting, setSetting] = useState(null);
  const [isLoadingFile, setIsLoadingFile] = useState(false);
  const [loadFromFileInput, setLoadFromFileInput] = useState(null);
  const [isSolved, setIsSolved] = useState(false);
  const [isSolving, setIsSolving] = useState(false);
  const [algorithm, setAlgorithm] = useState(null);
  const [linkedin, setLinkedin] = useState(true);
  const [counter, setCounter] = useState(true);

  return (
    <div>
      {/* {counter && <Counter />} */}
      {linkedin && <Linkedin />}

      {/* {carousel && <W3SchoolCarousel />}
      <Header
        isSolving={isSolving}
        setIsLoadingFile={setIsLoadingFile}
        isLoadingFile={isLoadingFile}
        isSolved={isSolved}
      />
      {isSolving ? (
        <Solver
          setIsSolving={setIsSolving}
          setIsSolved={setIsSolved}
          boardData={boardData}
          setBoarData={setBoardData}
          algorithm={algorithm}
        />
      ) : (
        <IOScreen
          setIsSolving={setIsSolving}
          isLoadingFile={isLoadingFile}
          setLoadFromFileInput={setLoadFromFileInput}
          loadFromFileInput={loadFromFileInput}
          setBoardData={setBoardData}
          setIsLoadingFile={setIsLoadingFile}
          boardData={boardData}
          setSetting={setSetting}
          isSolved={isSolved}
          setting={setting}
          setAlgorithm={setAlgorithm}
        />
      )} */}
    </div>
  );
};

export default App;
