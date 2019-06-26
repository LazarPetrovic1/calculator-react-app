import React from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import Calculator from "./Calculator";
import HelpSnippet from "./HelpSnippet";

function App() {
  return (
    <>
      <div className="App">
        <Calculator />
      </div>
      <HelpSnippet />
    </>
  );
}

export default App;
