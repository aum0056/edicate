import styled from "styled-components";
import { Container, Form, Button } from "react-bootstrap";

export const ContainerCustom = styled(Container)`
  padding: 0 30px;
  top: 50%;
  transform: translate(0, 25%);
`;

export const FormCustom = styled(Form.Control)`
  max-width: 350px;
  margin-top: 15px !important;
  color: #000000 !important;
`;

export const FormGroup = styled(Form)`
  .form-group {
    margin-bottom: none;
  }
  .form-control {
    border: 1px solid #c4c4c4;
    color: #c4c4c4;
    height: 40px;
    margin: auto;
  }
`;

export const FontCustom = styled.div`
  color: #1451ee;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`;

export const ButtonCustom = styled(Button)`
  color: #fff;
  background-color: #02bc77 !important;
  height: 50px;
  margin: 30px 0px;
  width: 100%;
  max-width: 350px;
`;

export const LogoBox = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 30px;
`;
