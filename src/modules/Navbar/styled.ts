import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const NavCustom = styled(Navbar)`
  font-size: 30px;
  height: 80px;
  background-color: #02bc77;
  @media (max-width: 520px) {
    font-size: 24px;
  }
  @media (max-width: 420px) {
    font-size: 20px;
  }
`;

export const ExitBotton = styled.img`
  @media (max-width: 520px) {
    width: 25px;
    height: 25px;
    top: 28px;
  }
  @media (max-width: 420px) {
    width: 23px;
    height: 23px;
    top: 29px;
  }
  position: absolute;
  right: 30px;
  top: 26px;
  cursor: pointer;
`;

export const TextCustom = styled.div`
  margin: auto;
  color: white;
  cursor: pointer;
`;
