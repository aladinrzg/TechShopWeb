import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};
// valeurs par defaults
Message.defaultProps = {
  variant: "info", // blue color
};

export default Message;
