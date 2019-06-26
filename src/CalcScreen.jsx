import React from "react";
import "./styles/CalcScreen.css";

function CalcScreen(props) {
  const { clicked, handleChange } = props;
  return (
    // <input
    //   type="text"
    //   className="CalcScreen"
    //   value={value}
    //   onChange={handleChange}
    // />
    <div className="CalcScreen">{clicked}</div>
  );
}

export default CalcScreen;
