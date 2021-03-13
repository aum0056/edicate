import React from "react";
import Exit from "../../images/exit.svg";
import { NavCustom, ExitBotton, TextCustom } from "./styled";
import { useHistory } from "react-router-dom";

const Navbar = ({ NamePage }) => {
  const history = useHistory();
  const OnClickLogin = (event) => {
    localStorage.removeItem("x-access-token");
    history.push({ pathname: "/" });
  };
  return (
    <NavCustom sticky="top" className="justify-content-center">
      <TextCustom>{NamePage}</TextCustom>
      <ExitBotton onClick={OnClickLogin} src={Exit} alt="Exit" />
    </NavCustom>
  );
};

export default Navbar;
