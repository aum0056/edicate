import React from "react";
import { ModalCustom, TextModal, CloseButton, ButtonBox } from "./styled";

const AlertModal = (props) => {
  const { showStatus, onClick, headerText, detailText } = props;
  const handleClose = () => setShowStatus();
  const setShowStatus = () => {
    onClick(false);
  };

  return (
    <ModalCustom centered show={showStatus} onHide={handleClose}>
      <TextModal style={{ fontSize: "22px" }}>{headerText}</TextModal>
      <TextModal style={{ fontSize: "16px", color: "#8B8B8B" }}>
        {detailText}
      </TextModal>
      <ButtonBox>
        <CloseButton onClick={handleClose}>Close</CloseButton>
      </ButtonBox>
    </ModalCustom>
  );
};

export default AlertModal;
