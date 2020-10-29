import React from "react";
import {
  ContainerCustom,
  FormCustom,
  FormGroup,
  FontCustom,
  LogoBox,
  ButtonCustom,
} from "./styled";
import logo from "../../images/logoEdicate.svg";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const OnClickCustom = () => {
    history.push({ pathname: "/custom" });
  };
  return (
    <ContainerCustom>
      <LogoBox src={logo} alt="logo" />
      <FormGroup>
        <FormCustom type="text" placeholder="รหัสบัญชี" />
        <FormCustom type="password" placeholder="รหัสผ่าน" />
      </FormGroup>
      <div onClick={OnClickCustom} style={{ textAlign: "center" }}>
        <ButtonCustom variant="success">เข้าสู่ระบบ</ButtonCustom>
      </div>
      <FontCustom>ลืมรหัสผ่าน ?</FontCustom>
    </ContainerCustom>
  );
};

export default Login;
