import React from "react";
import Exit from "../../images/exit.svg";
import { NavCustom, ExitBotton } from "./styled";
import { useHistory } from "react-router-dom";

const Navbar = ({ NamePage }) => {
  const history = useHistory();
  const OnClickLogin = () => {
    history.push({ pathname: "/" });
  };
  return (
    <NavCustom sticky="top" className="justify-content-center">
      <div style={{ margin: "auto", color: "white" }}>{NamePage}</div>
      <ExitBotton onClick={OnClickLogin} src={Exit} alt="Exit" />
    </NavCustom>
  );
};

export default Navbar;
