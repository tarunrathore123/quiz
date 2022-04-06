import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Axios from "./Axios";
import { useDispatch } from "react-redux";
import {
  handleCategoryChange,
  handleDifficultyChange,
  handleTypeChange,
} from "./redux/action";
const QuizContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
`;
const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Select = styled.select`
  width: 400px;
  padding: 20px;
  border: 1px solid grey;
`;
const Button = styled.button`
  border: 1px solid grey;
  padding: 10px;
`;

function Quiz() {
  const navigate = useNavigate();

  const { response, error, loading } = Axios({ url: "/api_category.php" });

  const difficultyOption = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple choice" },
    { id: "boolean", name: "True/False" },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/question");
  };

  const dispatch = useDispatch();
  function handleCategory(e) {
    dispatch(handleCategoryChange(e.target.value));
  }
  function handleDifficulty(e) {
    dispatch(handleDifficultyChange(e.target.value));
  }
  function handleType(e) {
    dispatch(handleTypeChange(e.target.value));
  }

  return (
    <form onSubmit={submitHandler}>
      <QuizContainer>
        <Title>
          <h1>Quiz App</h1>
        </Title>
        <SelectContainer>
          <Select label="category" onChange={handleCategory}>
            {response &&
              response.trivia_categories.map((e) => {
                return (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                );
              })}
          </Select>

          <Select label="difficulty" onChange={handleDifficulty}>
            {difficultyOption.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </Select>
          <Select label="type" onChange={handleType}>
            {typeOptions.map((e) => (
              <option key={e.id} value="boolean">
                {e.name}
              </option>
            ))}
          </Select>
          <Button type="submit">Get Started</Button>
        </SelectContainer>
      </QuizContainer>
    </form>
  );
}

export default Quiz;
