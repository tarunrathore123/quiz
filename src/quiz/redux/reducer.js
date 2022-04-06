const initialState = {
  question_category: 9,
  question_difficulty: "easy",
  question_type: "multiple",
  amount_of_question: 5,
  score: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_CATEGORY":
      return {
        ...state,
        question_category: action.payload,
      };
    case "CHANGE_DIFFICULTY":
      return {
        ...state,
        question_difficulty: action.payload,
      };
    case "CHANGE_TYPE":
      return {
        ...state,
        question_type: action.payload,
      };
    case "CHANGE_SCORE":
      return { ...state, score: action.payload };
    default:
      return state;
  }
}

export default reducer;
