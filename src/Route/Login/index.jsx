import React, { useState, useEffect } from "react";
import {
  ContainerCustom,
  FormCustom,
  FormGroup,
  FontCustom,
  LogoBox,
  ButtonCustom,
} from "./styled";
import logo from "../../images/logoEdicate.svg";
import AlertModal from "../../modules/AlertModal";
import { useHistory } from "react-router-dom";
import { GetLogin } from "../../utills/api";
import { DecodeExpire } from "../../utills/expCheck";
import Spinner from "react-loader-spinner";

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [showExp, setShowExp] = useState(false);
  const [fail, setFail] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isPress, setPress] = useState(false);

  useEffect(() => {
    if (DecodeExpire() === false) {
      setShowExp(true);
    }
  }, []);

  useEffect(() => {
    if (showExp) {
      localStorage.removeItem("x-access-token");
      localStorage.removeItem("semester");
      localStorage.removeItem("academicYear");
    }
  }, [showExp]);

  useEffect(() => {
    if (isLoading === false && isPress) {
      history.push({ pathname: "/custom" });
    }
  }, [isLoading, history, isPress]);

  useEffect(() => {
    if (isPress) {
      GetLogin(
        username,
        password,
        (res) => {
          localStorage.setItem("x-access-token", res.data["x-access-token"]);
          localStorage.setItem("semester", res.data.results[0].semester);
          localStorage.setItem("academicYear", res.data.results[0].academicYr);
          setFail(false);
          setIsLoading(false);
        },
        (error) => {
          setFail(true);
          setShow(true);
        }
      );
    }
  }, [isPress, password, username]);

  const OnClickSendDatatoBack = () => {
    setPress(true);
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
        {isLoading && isPress ? (
          <ButtonCustom variant="success">
            <Spinner type="ThreeDots" color="#fff" height={10} />
          </ButtonCustom>
        ) : (
          <ButtonCustom variant="success">เข้าสู่ระบบ</ButtonCustom>
        )}
      </div>
      <FontCustom>
        <a href="https://accounts.ku.ac.th/private/login">ลืมรหัสผ่าน ?</a>
      </FontCustom>
      <div>
        {fail && (
          <AlertModal
            showStatus={show}
            onClick={setShow}
            headerText="ไม่สามารถเข้าสู่ระบบได้"
            detailText="รหัสผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง"
          />
        )}
      </div>
      <div>
        {!DecodeExpire() && (
          <AlertModal
            showStatus={showExp}
            onClick={setShowExp}
            headerText="หมดเวลาการใช้งาน"
            detailText="กรุณาเข้าสู่ระบบใหม่อีกครั้ง"
          />
        )}
      </div>
    </ContainerCustom>
  );
};

export default Login;
