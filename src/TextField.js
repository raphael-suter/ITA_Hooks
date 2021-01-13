import React from "react";
import { Form } from "react-bootstrap";

const TextField = ({ onChange }) => {
  return <Form.Control type="email" onChange={onChange} />;
};

export default TextField;
