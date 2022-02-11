import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(count);

  return (
    <div className="counter">
      value: {count}
      <br />
      <button onClick={() => dispatch(increment())}>increase</button>
      <button onClick={() => dispatch(decrement())}>increase</button>
    </div>
  );
};

export default Counter;
