import React, { useState } from "react";
import "./styles/CalculatorNums.css";
import CalcScreen from "./CalcScreen";

function CalculatorNums() {
  const [clicked, setClicked] = useState("");
  // sign state
  // other num state
  // pos state
  let value = [];

  function reset(e) {
    e.preventDefault();
    setClicked("");
  }

  function handleChange(e) {
    e.preventDefault();
    setClicked(clicked.concat(e.target.value));
    console.log(clicked);
  }

  function evaluate(ev) {
    ev.preventDefault();
    try {
      setClicked(eval(clicked));
    } catch (e) {
      console.log(e);
      setClicked(e.name);
    }
  }

  return (
    <form>
      <CalcScreen clicked={clicked} handleChange={handleChange} />
      <div className="CalculatorNums">
        <div className="CalculatorNums-numpad">
          <button
            className="CalculatorNums-number"
            onClick={handleChange}
            value={9}
          >
            9
          </button>
          <button
            className="CalculatorNums-number"
            onClick={handleChange}
            value={8}
          >
            8
          </button>
          <button
            className="CalculatorNums-number"
            onClick={handleChange}
            value={7}
          >
            7
          </button>
          <button
            className="CalculatorNums-number"
            onClick={handleChange}
            value={6}
          >
            6
          </button>
          <button
            className="CalculatorNums-number"
            onClick={handleChange}
            value={5}
          >
            5
          </button>
          <button
            className="CalculatorNums-number"
            onClick={handleChange}
            value={4}
          >
            4
          </button>
          <button
            className="CalculatorNums-number"
            onClick={handleChange}
            value={3}
          >
            3
          </button>
          <button
            className="CalculatorNums-number"
            onClick={handleChange}
            value={2}
          >
            2
          </button>
          <button
            className="CalculatorNums-number"
            onClick={handleChange}
            value={1}
          >
            1
          </button>
          <button
            className="CalculatorNums-number"
            onClick={handleChange}
            value={0}
          >
            0
          </button>
        </div>
        <div className="CalculatorNums-signpad">
          <button
            className="CalculatorNums-operator"
            onClick={handleChange}
            value="+"
          >
            +
          </button>
          <button
            className="CalculatorNums-operator"
            onClick={handleChange}
            value="-"
          >
            -
          </button>
          <button
            className="CalculatorNums-operator"
            onClick={handleChange}
            value="*"
          >
            *
          </button>
          <button
            className="CalculatorNums-operator"
            onClick={handleChange}
            value="/"
          >
            /
          </button>
          <button
            className="CalculatorNums-operator"
            onClick={handleChange}
            value="."
          >
            .
          </button>
          <button
            className="CalculatorNums-operator"
            onClick={handleChange}
            value="**"
          >
            **
          </button>
          <button
            className="CalculatorNums-operator"
            onClick={evaluate}
            value="="
          >
            =
          </button>
          <button className="CalculatorNums-operator" onClick={reset} value="C">
            C
          </button>
        </div>
      </div>
    </form>
  );
}

export default CalculatorNums;
