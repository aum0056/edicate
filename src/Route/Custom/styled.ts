import styled from "styled-components";
import { Container, Button } from "react-bootstrap";

export const MidContainer = styled(Container)`
  position: top;
  margin-top: 7%;
  margin-bottom: 7%;
  @media (min-height: 600px) {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
`;

export const CustomButton = styled(Button)`
  width: 325px;
  height: 400px;
  @media (max-width: 767px) {
    height: fit-content;
    width: 100%;
    margin: 20px 30px;
  }
`;

export const FontBox = styled.div`
  font-size: 32px;
  margin-top: 50px;
  @media (max-width: 767px) {
    margin: 20px 0;
  }
`;
