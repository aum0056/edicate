import styled from "styled-components";
import { Container, Nav, Button } from "react-bootstrap";

export const Navbar = styled(Nav)`
    font-size: 30px;
    height: 80px;
    background-color: #02BC77;
`;

export const MidContainer = styled(Container)`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
`;

export const CustomButton = styled(Button)`
    width: 350px;
    height: 400px;
`;

export const ExitBotton = styled.img`
    position: absolute;
    right: 30px;
    top: 26px;
    cursor: pointer;
`;

export const FontBox = styled.div`
    font-size: 32px;
    margin-top: 50px;
`;
