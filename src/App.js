import React, { useState } from "react";
import Header from "./components/Header";
import IOScreen from "./components/IOScreen";
import Solver from "./components/Solver";
import Carousel from "./slick-carousel/carousel";
import NormalCarousel from "./slick-carousel/normal-carousel";
import W3SchoolCarousel from "./slick-carousel/w3-school-carousel";
import Linkedin from "./linkedin/linkedin";
import Counter from "./counter/Counter";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Calculator from "./calculator/calculator";
import Docs from "./docs/docs";
import Quiz from "./quiz/quiz";
import Question from "./quiz/question";
import Score from "./quiz/score";

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
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Linkedin />}></Route> */}
        {/* <Route exact path="/calculator" element={<Calculator />}></Route> */}
        {/* <Route exact path="/docs" element={<Docs />}></Route> */}
        <Route exact path="/quiz" element={<Quiz />}></Route>
        <Route exact path="/question" element={<Question />}></Route>
        <Route exact path="/score" element={<Score />}></Route>
        {/* <Route path="/users"><Users /></Route> */}
        <Route path="*" element={<Quiz />} />
        {/* <Route path="/">
          <Home />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
