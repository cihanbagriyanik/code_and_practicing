import React from "react";
import "./Counter.css";
import { arttir, azalt, resetle } from "../../redux/actions/counterActions";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const { text1, counterSonuc } = useSelector((state) => state.counterReducer);

  const dispatch1 = useDispatch();

  return (
    <div className="app">
      <h2 className="counter-header">Counter with Redux</h2>
      <h1> {counterSonuc} </h1>
      <h2> {text1} </h2>
      <div>
        <button
          className="counter-button positive"
          onClick={() => dispatch1(arttir())}
        >
          ARTTIR
        </button>
        <button
          className="counter-button zero"
          onClick={() => dispatch1(resetle())}
        >
          RESET
        </button>
        <button
          className="counter-button negative"
          onClick={() => dispatch1(azalt())}
        >
          AZALT
        </button>
      </div>
    </div>
  );
};

export default Counter;
