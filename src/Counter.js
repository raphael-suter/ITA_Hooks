import React, { useReducer } from "react";
import { Button } from "react-bootstrap";
import TextField from "./TextField";

const Counter = () => {
  const [count, dispatchCount] = useReducer((count, { type, value }) => {
    switch (type) {
      case "increment":
        return count + 1;
      case "decrement":
        return count - 1;
      case "clear":
        return 0;
      case "set":
        return value;
      default:
        throw new Error();
    }
  }, 0);

  return (
    <>
      <Button
        className="my-4"
        onClick={() => dispatchCount({ type: "increment" })}
      >
        +
      </Button>
      <p className="mb-0">{count}</p>
      <Button
        className="my-4"
        onClick={() => dispatchCount({ type: "decrement" })}
      >
        -
      </Button>
      <Button className="mx-4" onClick={() => dispatchCount({ type: "clear" })}>
        clear
      </Button>
      <TextField
        onChange={(evt) =>
          dispatchCount({ type: "set", value: evt.target.value })
        }
      />
    </>
  );
};

export default Counter;
