import { createStore, combineReducers } from "redux";
import reducer from "./reducer";

// const store = createStore(reducer);
const store = createStore(
  combineReducers({
    quizReducer: reducer,
  })
);

export default store;
