import styled from "styled-components";
import { Modal } from "react-bootstrap";

export const ModalCustom = styled(Modal)`
  font-family: kanit;
  padding: 10px;
  .modal-content {
    padding: 20px;
  }
  cursor: default;
`;

export const TextModal = styled.div`
  text-align: center;
  margin-top: 5px;
`;

export const CloseButton = styled.div`
  background-color: #02bc77;
  color: #ffffff;
  padding: 7px 12px;
  height: fit-content;
  width: fit-content;
  border-radius: 5px;
  cursor: pointer;
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  font-size: 20px;
`;
