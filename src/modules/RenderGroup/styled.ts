import styled from "styled-components";
import { Form } from "react-bootstrap";

export const FormCustom = styled(Form.Control)`
  font-size: 20px;
  @media (max-width: 560px) {
    font-size: 3.57vw;
  }
  @media (max-width: 420px) {
    font-size: 14px;
  }
  padding: 5px 30px;
  width: 100%;
  height: 60px;
  border: 0.5px solid #c4c4c4;
  background-color: transparent;
  border-radius: 5px;
  margin-top: 10px;
`;

export const FormGroupCustom = styled(Form.Group)`
  width: 100%;
`;
