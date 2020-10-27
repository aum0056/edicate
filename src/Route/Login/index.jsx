import React from "react";
import {
  ContainerCustom,
  FormCustom,
  FormGroup,
  FontCustom,
  CheckBox,
  LogoBox,
} from "./styled";
import logo from "../../images/logoEdicate.svg";
import { useHistory } from "react-router-dom";

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
        <FormCustom type="text" placeholder="รหัสผ่าน" />
      </FormGroup>
      <CheckBox>เข้าสู่ระบบ</CheckBox>
      <FontCustom>ลืมรหัสผ่าน ?</FontCustom>
    </ContainerCustom>
  );
};

export default Login;
