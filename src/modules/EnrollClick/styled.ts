import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

export const Bigbox = styled(Container)`
  padding: 30px !important;
  border: 0.5px solid #c4c4c4;
  border-top: none;
  cursor: default;
`;

export const BigboxSearch = styled(Bigbox)`
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  margin: 10px 0 20px 0;
`;

export const RowHeadCustom = styled(Row)`
  font-size: 19.8px;
  margin-bottom: 5px;
  @media (max-width: 560px) {
    font-size: 3.57vw;
  }
  @media (max-width: 413px) {
    font-size: 14px;
  }
`;

export const RowDetailCustom = styled.div`
  font-size: 18px;
  @media (max-width: 560px) {
    font-size: 3.2vw;
  }
  @media (max-width: 413px) {
    font-size: 12px;
  }
`;

export const ColorTheme = styled.div<{customColor: boolean}>`
  color: ${(props) => props.customColor ? "#c4c4c4" : props.theme.main};
`;
