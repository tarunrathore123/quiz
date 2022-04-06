import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  width: 100vw;
  //   height: 100vh;
  font-size: 40px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 30px;
  border: 1px solid grey;
  margin: 0 auto;

  .link-center {
    padding: 5px 10px;
  }
`;

function Score() {
  const score = useSelector((state) => state.quizReducer.score);
  return (
    <div style={{ width: "100vw", textAlign: "center" }}>
      <ScoreContainer>Score: {score}</ScoreContainer>
      <Button>
        <Link className="link-center" to="/quiz">
          try one more time
        </Link>
      </Button>
    </div>
  );
}

export default Score;
