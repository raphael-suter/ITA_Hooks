import React, { useReducer } from "react";
import { Button, Container } from "react-bootstrap";

const Counter = () => {
  const [count, dispatchCount] = useReducer((count, type) => {
    switch (type) {
      case "increment":
        return count + 1;
      case "decrement":
        return count - 1;
      case "clear":
        return 0;
      default:
        throw new Error();
    }
  }, 0);

  return (
    <Container className="my-5">
      <Button className="my-4" onClick={() => dispatchCount("increment")}>
        +
      </Button>
      <p className="mb-0">{count}</p>
      <Button className="my-4" onClick={() => dispatchCount("decrement")}>
        -
      </Button>
      <Button className="mx-4" onClick={() => dispatchCount("clear")}>
        clear
      </Button>
    </Container>
  );
};

export default Counter;
