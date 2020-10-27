import styled from "styled-components";
import { Container, Form } from "react-bootstrap";

export const ContainerCustom = styled(Container)`
  padding: 0 30px;
  top: 50%;
  transform: translate(0, 25%);
`;

export const FormCustom = styled(Form.Control)`
  margin-top: 15px;
`;

export const FormGroup = styled(Form)`
  .form-group {
    margin-bottom: none;
  }
  .form-control {
    border: 1px solid #c4c4c4;
    color: #c4c4c4;
    height: 40px;
  }
`;

export const FontCustom = styled.div`
  color: #1451ee;
  font-size: 14px;
  text-align: center;
`;

export const CheckBox = styled.div`
  display: block;
  width: 100%;
  height: 40px;
  padding: 0.375rem 0.75rem;
  color: #ffffff;
  background-color: #02bc77;
  border-radius: 0.25rem;
  margin: 25px 0;
  text-align: center;
`;

export const LogoBox = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 30px;
`;
