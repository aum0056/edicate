import styled from "styled-components";
import { Container, Button } from "react-bootstrap";

export const MidContainer = styled(Container)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export const CustomButton = styled(Button)`
  width: 350px;
  height: 400px;
`;

export const FontBox = styled.div`
  font-size: 32px;
  margin-top: 50px;
`;

export const HoverImg = styled.img`
  &:hover {
    color: red;
  }
`;
