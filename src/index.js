import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Container className="my-5">
      <Counter />
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
