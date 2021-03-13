import React, { useState, useEffect } from "react";
import {
  ContainerCustom,
  FormCustom,
  FormGroup,
  FontCustom,
  LogoBox,
  ButtonCustom,
  ModalCustom,
  TextModal,
  CloseButton,
  ButtonBox,
} from "./styled";
import logo from "../../images/logoEdicate.svg";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { DecodeExpire } from "../../utils/api.js";

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [showExp, setShowExp] = useState(false);
  const [fail, setFail] = useState(false);

  useEffect(() => {
    if (DecodeExpire() === false) {
      setShowExp(true);
    }
  }, []);

  const OnClickSendDatatoBack = (event) => {
    axios({
      method: "post",
      headers: { "content-type": "application/json" },
      url: "http://localhost:8000/login",
      data: {
        username: username,
        password: password,
      },
    })
      .then((res) => {
        localStorage.setItem("x-access-token", res.data["x-access-token"]);
        if (res.status === 200) {
          setFail(false);
          history.push({ pathname: "/custom" });
        }
      })
      .catch((err) => {
        if (err) {
          setFail(true);
          setShow(true);
        }
      });
  };

  const AlertLogin = () => {
    const handleClose = () => setShow(false);
    return (
      <ModalCustom centered show={show} onHide={handleClose}>
        <TextModal style={{ fontSize: "22px" }}>
          ไม่สามารถเข้าสู่ระบบได้
        </TextModal>
        <TextModal style={{ fontSize: "16px", color: "#8B8B8B" }}>
          รหัสผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง
        </TextModal>
        <ButtonBox>
          <CloseButton onClick={handleClose}>Close</CloseButton>
        </ButtonBox>
      </ModalCustom>
    );
  };

  const AlertExp = () => {
    const handleClose = () => setShowExp(false);
    return (
      <ModalCustom centered show={showExp} onHide={handleClose}>
        <TextModal style={{ fontSize: "22px" }}>หมดเวลาการใช้งาน</TextModal>
        <TextModal style={{ fontSize: "16px", color: "#8B8B8B" }}>
          กรุณาเข้าสู่ระบบใหม่อีกครั้ง
        </TextModal>
        <ButtonBox>
          <CloseButton onClick={handleClose}>Close</CloseButton>
        </ButtonBox>
      </ModalCustom>
    );
  };

  const OnChangeSetUsername = (event) => {
    setUsername(event.target.value);
  };

  const OnChangeSetPassword = (event) => {
    setPassword(event.target.value);
  };

  const KeyPress = (event) => {
    if (event.key === "Enter") {
      OnClickSendDatatoBack();
    }
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
          onKeyPress={KeyPress}
        />
        <FormCustom
          type="password"
          placeholder="รหัสผ่าน"
          value={password}
          onChange={OnChangeSetPassword}
          onKeyPress={KeyPress}
        />
      </FormGroup>
      <div onClick={OnClickSendDatatoBack} style={{ textAlign: "center" }}>
        <ButtonCustom variant="success">เข้าสู่ระบบ</ButtonCustom>
      </div>
      <FontCustom>
        <a href="https://accounts.ku.ac.th/private/login">ลืมรหัสผ่าน ?</a>
      </FontCustom>
      <div>{fail ? AlertLogin() : null}</div>
      <div>{DecodeExpire() ? null : AlertExp()}</div>
    </ContainerCustom>
  );
};

export default Login;
