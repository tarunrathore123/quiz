import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Axios from "./Axios";
import { decode } from "html-entities";
import styled from "styled-components";
import { handleScoreChange } from "./redux/action";

const Button = styled.button`
  display: block;
  border: 1px solid black;
  padding: 5px 10px;
  margin-bottom: 10px;
  //   width: 300px;
  border-radius: 5px;
`;
const P = styled.p`
  margin-top: 20px;
`;

function Question() {
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score,
  } = useSelector((state) => state.quizReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let apiUrl = `/api.php?amount=${amount_of_question}`;

  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }

  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }

  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }

  const { response, loading } = Axios({ url: apiUrl });

  let [questionIndex, setQuestionIndex] = useState(0);
  let [options, setOptions] = useState([]);
  console.log(apiUrl);
  console.log(response);

  useEffect(() => {
    if (response?.results.length && response.results.length > 0) {
      const question = response.results[questionIndex];
      console.log(question.question);
      let answers = [...question.incorrect_answers];
      answers.splice(
        Math.floor(Math.random() * question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [questionIndex, response]);

  function handleClickAnswer(e) {
    if (e.target.value === response.results[questionIndex].correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }
    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
      console.log(questionIndex);
    } else {
      navigate("/score");
    }
  }

  return (
    <div>
      <center>
        <P>{response && decode(response.results[questionIndex].question)}</P>
        <br />
        {options.map((o, id) => {
          return (
            <Button key={id} value={o} onClick={handleClickAnswer}>
              {o}
            </Button>
          );
        })}
        <button></button>
      </center>
    </div>
  );
}

export default Question;
