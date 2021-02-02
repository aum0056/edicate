import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const NavCustom = styled(Navbar)`
  font-size: 30px;
  height: 70px;
  background-color: #02bc77;
  font-size: 4.82vw;
  @media (min-width: 560px) {
    font-size: 27px;
  }
  @media (max-width: 460px) {
    font-size: 22px;
  }
`;

export const ExitBotton = styled.img`
  @media (min-width: 450px) {
    width: 30px;
    height: 30px;
  }
  width: 6.67vw;
  height: 6.67vw;
  position: absolute;
  right: 30px;
  cursor: pointer;
`;

export const TextCustom = styled.div`
  margin: auto;
  color: white;
  cursor: pointer;
`;
