import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Counter />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
