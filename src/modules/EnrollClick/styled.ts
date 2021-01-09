import styled from "styled-components";
import { Container } from "react-bootstrap";

export const Bigbox = styled(Container)`
  padding: 30px !important;
  border: 1px solid #c4c4c4;
  border-top: none;
  cursor: pointer;
`;

export const BigboxSearch = styled(Bigbox)`
  border-top: 1px solid #c4c4c4;
  border-radius: 5px;
  margin-bottom: 20px;
`;