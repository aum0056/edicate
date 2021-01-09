import React, { useState } from "react";
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
import axios from "axios";

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const OnClickSendDatatoBack = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:8000/login",
      data: {
        username: username,
        password: password,
      },
    }).then((res) => {
      console.log(res.data);
    });
    history.push({ pathname: "/custom" });
  };
  const OnChangeSetUsername = (event) => {
    setUsername(event.target.value);
  };
  const OnChangeSetPassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <ContainerCustom>
      <LogoBox src={logo} alt="logo" />
      <FormGroup>
        <FormCustom
          type="text"
          placeholder="รหัสบัญชี"
          value={username}
          onChange={OnChangeSetUsername}
        />
        <FormCustom
          type="password"
          placeholder="รหัสผ่าน"
          value={password}
          onChange={OnChangeSetPassword}
        />
      </FormGroup>
      <div onClick={OnClickSendDatatoBack} style={{ textAlign: "center" }}>
        <ButtonCustom variant="success">เข้าสู่ระบบ</ButtonCustom>
      </div>
      <FontCustom>ลืมรหัสผ่าน ?</FontCustom>
    </ContainerCustom>
  );
};

export default Login;
