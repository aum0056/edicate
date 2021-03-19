import styled from "styled-components";
import { Form } from "react-bootstrap";

export const TextCustom = styled.div`
  margin-top: 40px;
  font-size: 24px;
  cursor: default;
  @media (max-width: 560px) {
    font-size: 4.29vw;
  }
  @media (max-width: 420px) {
    font-size: 18px;
  }
`;

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

export const CondiCustom = styled.div`
  font-size: 18px;
  @media (max-width: 560px) {
    font-size: 3.2vw;
  }
  @media (max-width: 413px) {
    font-size: 12px;
  }
  cursor: default;
  color: #fd0404;
`;

export const FormCheckCustom = styled(Form.Check)`
  font-size: 16px;
  .custom-control-input:checked ~ .custom-control-label::before {
    border-color: #02bc77;
    background-color: #02bc77;
    box-shadow: 0 0 0 0.2rem rgba(2, 188, 119, 0.25);
  }
`;
