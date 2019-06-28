import React, { useState } from "react";
import "./styles/CalculatorNums.css";
import CalcScreen from "./CalcScreen";

function CalculatorNums() {
  const [clicked, setClicked] = useState("");

  function reset(e) {
    e.preventDefault();
    setClicked("");
  }

  function handleChange(e) {
    e.preventDefault();
    setClicked(clicked.concat(e.target.value));
    console.log(clicked);
  }

  function handlePress(e) {
    console.log(e);
    e.preventDefault();
    switch (e.keyCode) {
      case 48:
      case 96:
        setClicked(clicked.concat(0));
        break;
      case 49:
      case 97:
        setClicked(clicked.concat(1));
        console.log(e);
        break;
      case 50:
      case 98:
        setClicked(clicked.concat(2));
        break;
      case 51:
      case 99:
        setClicked(clicked.concat(3));
        break;
      case 52:
      case 100:
        setClicked(clicked.concat(4));
        break;
      case 53:
      case 101:
        setClicked(clicked.concat(5));
        break;
      case 54:
      case 102:
        setClicked(clicked.concat(6));
        break;
      case 55:
      case 103:
        setClicked(clicked.concat(7));
        break;
      case 56:
      case 104:
        setClicked(clicked.concat(8));
        break;
      case 57:
      case 105:
        setClicked(clicked.concat(9));
        break;
      case 107:
        setClicked(clicked.concat("+"));
        break;
      case 109:
        setClicked(clicked.concat("-"));
        console.log(clicked);
        break;
      case 106:
        setClicked(clicked.concat("*"));
        break;
      case 111:
        setClicked(clicked.concat("/"));
        break;
      case 18:
        setClicked(clicked.concat("**"));
        break;
      case 113:
        setClicked(clicked.concat("**2"));
        break;
      case 114:
        setClicked(clicked.concat("**3"));
        break;
      case 8:
        setClicked(clicked.substring(0, clicked.length - 1));
        break;
      case 13:
        setClicked(String(eval(clicked)));
        break;
      case 67:
        setClicked("");
        break;
      case 219:
        setClicked(clicked.concat("("));
        break;
      case 221:
        setClicked(clicked.concat(")"));
        break;
      case 77:
        setClicked(clicked.concat("%"));
        break;
      default:
        console.log("Not a supported operation");
    }
  }

  function evaluate(ev) {
    ev.preventDefault();
    try {
      let answer = eval(clicked);
      setClicked(String(answer));
    } catch (e) {
      console.log(e);
      setClicked(e.name);
    }
  }

  return (
    <form tabIndex="0">
      <CalcScreen clicked={clicked} handleChange={handleChange} />
      <div className="CalculatorNums">
        <div className="CalculatorNums-numpad">
          <button
            className="CalculatorNums-number"
            onClick={handleChange}
            value={9}
            onKeyDown={handlePress}
          >
            9
          </button>
          <button
            className="CalculatorNums-number"
            onClick={handleChange}
            value={8}
            onKeyDown={handlePress}
          >
            8
          </button>
          <button
            className="CalculatorNums-number"
            onClick={handleChange}
            value={7}
            onKeyDown={handlePress}
          >
            7
          </button>
          <button
            className="CalculatorNums-number"
            onClick={handleChange}
            value={6}
            onKeyDown={handlePress}
          >
            6
          </button>
          <button
            className="CalculatorNums-number"
            onClick={handleChange}
            value={5}
            onKeyDown={handlePress}
          >
            5
          </button>
          <button
            className="CalculatorNums-number"
            onClick={handleChange}
            value={4}
            onKeyDown={handlePress}
          >
            4
          </button>
          <button
            className="CalculatorNums-number"
            onClick={handleChange}
            value={3}
            onKeyDown={handlePress}
          >
            3
          </button>
          <button
            className="CalculatorNums-number"
            onClick={handleChange}
            value={2}
            onKeyDown={handlePress}
          >
            2
          </button>
          <button
            className="CalculatorNums-number"
            onClick={handleChange}
            value={1}
            onKeyDown={handlePress}
          >
            1
          </button>
          <button
            className="CalculatorNums-number"
            onClick={handleChange}
            value={0}
            onKeyDown={handlePress}
          >
            0
          </button>
          <button
            className="CalculatorNums-operator"
            onClick={reset}
            value="C"
            onKeyDown={handlePress}
          >
            C
          </button>
          <button
            className="CalculatorNums-operator"
            onClick={handleChange}
            value="%"
            onKeyDown={handlePress}
          >
            %
          </button>
        </div>
        <div className="CalculatorNums-signpad">
          <button
            className="CalculatorNums-operator"
            onClick={handleChange}
            value="+"
            onKeyDown={handlePress}
          >
            +
          </button>
          <button
            className="CalculatorNums-operator"
            onClick={handleChange}
            value="-"
            onKeyDown={handlePress}
          >
            -
          </button>
          <button
            className="CalculatorNums-operator"
            onClick={handleChange}
            value="*"
            onKeyDown={handlePress}
          >
            *
          </button>
          <button
            className="CalculatorNums-operator"
            onClick={handleChange}
            value="/"
            onKeyDown={handlePress}
          >
            /
          </button>
          <button
            className="CalculatorNums-operator"
            onClick={handleChange}
            value="("
            onKeyDown={handlePress}
          >
            (
          </button>
          <button
            className="CalculatorNums-operator"
            onClick={handleChange}
            value=")"
            onKeyDown={handlePress}
          >
            )
          </button>
          <button
            className="CalculatorNums-operator"
            onClick={handleChange}
            value="."
            onKeyDown={handlePress}
          >
            .
          </button>

          <button
            className="CalculatorNums-operator"
            onClick={evaluate}
            value="="
            onKeyDown={handlePress}
          >
            =
          </button>
        </div>
      </div>
    </form>
  );
}

export default CalculatorNums;
