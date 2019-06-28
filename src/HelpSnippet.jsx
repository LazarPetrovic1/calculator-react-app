import React, { useState } from "react";
import "./styles/HelpSnippet.css";

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
      <h2 className="HelpSnippet-intro">Help snippet</h2>
      <p className="HelpSnippet-intro">
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
            Open parenthesis <code>(</code> is on keycode <code>219</code> (open
            bracket => <code>[</code>), while the closing parenthesis
            <code>)</code> is on keycode
            <code>221</code> (closed bracket => <code>]</code>).
          </li>
          <li>Roots can be derived by using fractal exponentiation.</li>
          <li>
            Press <code>m</code> for quick modulus (remainder).
          </li>
        </ul>
      )}
    </section>
  );
}

export default HelpSnippet;
