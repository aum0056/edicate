import React, { useState } from "react";
import { button } from "react-bootstrap";
import { TestCustom, TestBox } from "./style";

const Test = () => {
  const [visibleP, setVisible] = useState(0);

  const handlerClick = () => {
    setVisible(!visibleP);
  };

  return (
    <div>
      <TestCustom />
    </div>
  );
};

export default Test;
