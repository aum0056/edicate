import styled from "styled-components";
import { Form } from "react-bootstrap";

export const FormCustom = styled(Form.Control)`
  margin-top: 10px !important;
  height: 60px !important;
`;

export const FormGroup = styled(Form)`
  .form-group {
    margin-bottom: none;
  }
  .form-control {
    border: 1px solid #c4c4c4;
    color: #000000;
    height: 40px;
    margin: auto;
    font-size: 20px;
    padding: 5px 30px;
    @media (max-width: 560px) {
      font-size: 3.57vw; 
    }
    @media (max-width: 420px) {
      font-size: 14px; 
    }
  }
`;

export const TextCustom = styled.div`
    margin-top: 40px;
    font-size: 24px;
    cursor: pointer;
    @media (max-width: 560px) {
      font-size: 4.29vw; 
    }
    @media (max-width: 420px) {
      font-size: 18px; 
    }
`