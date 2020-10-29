import React from "react";
import {
  ContainerCustom,
  FormCustom,
  FormGroup,
  FontCustom,
  CheckBox,
  LogoBox,
  ButtonCustom,
} from "./styled";
import logo from "../../images/logoEdicate.svg";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

const Login = () => {
  //   const history = useHistory();
  //   const OnClickTest = () => {
  //     history.push({ pathname: "/activity" });
  //   };
  return (
    <ContainerCustom>
      <LogoBox src={logo} alt="logo" />
      <FormGroup>
        <FormCustom type="text" placeholder="รหัสบัญชี" />
        <FormCustom type="password" placeholder="รหัสผ่าน" />
      </FormGroup>
      <div style={{textAlign: "center"}}>
        <ButtonCustom variant="success">เข้าสู่ระบบ</ButtonCustom>
      </div>
      <FontCustom>ลืมรหัสผ่าน ?</FontCustom>
    </ContainerCustom>
  );
};

export default Login;
