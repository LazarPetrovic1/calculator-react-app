import React, { useState } from "react";
import "./HelpSnippet.css";

function HelpSnippet() {
  const [show, setShow] = useState(false);

  function changeShow() {
    setShow(!show);
  }

  return (
    <section className="HelpSnippet">
      <div className="HelpSnippet-shower" onClick={changeShow}>
        {show ? "↑" : "↓"}
      </div>
      <h2>Help snippet</h2>
      <p>
        {show
          ? `This snippet explains shortcuts, so you can use the calculator via
        keyboard:`
          : "Reveal the snippet board if you get lost by clicking on the arrow above."}
      </p>
      {show && (
        <ul className="HelpSnippet-list">
          <li className="HelpSnippet-item">
            Numbers from <code>0</code> to <code>9</code> can be typed after
            focusing on the calculator.
          </li>
          <li className="HelpSnippet-item">
            Basic arithmetic is supported: <code>"+, -, *, /"</code> and{" "}
            <code>**</code> (exponentiation).
          </li>
          <li className="HelpSnippet-item">
            For quick square use <code>F2</code>.
          </li>
          <li>
            Use <code>F3</code> for quick cube.
          </li>
          <li className="HelpSnippet-item">
            <code>Backspace</code> also exists (due to prevalent human error).
          </li>
          <li className="HelpSnippet-item">
            Roots will be added sooner or later.
          </li>
        </ul>
      )}
    </section>
  );
}

export default HelpSnippet;
