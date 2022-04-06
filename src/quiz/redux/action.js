export const handleCategoryChange = (value) => {
  return {
    type: "CHANGE_CATEGORY",
    payload: value,
  };
};
export const handleDifficultyChange = (value) => {
  return {
    type: "CHANGE_DIFFICULTY",
    payload: value,
  };
};
export const handleTypeChange = (value) => {
  return {
    type: "CHANGE_TYPE",
    payload: value,
  };
};
export const handleScoreChange = (value) => {
  return { type: "CHANGE_SCORE", payload: value };
};
