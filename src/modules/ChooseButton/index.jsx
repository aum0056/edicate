import React from "react";
import { Boxtab, BoxtabClick } from "./styled";

const ChooseButton = (props) => {
  const { chooseName, click, onClick, tabId } = props;
  const setTabState = () => {
    onClick(tabId);
  };
  return (
    <div style={{ display: "flex", marginTop: "60px" }} onClick={setTabState}>
      {click ? (
        <BoxtabClick>{chooseName}</BoxtabClick>
      ) : (
        <Boxtab>{chooseName}</Boxtab>
      )}
    </div>
  );
};

export default ChooseButton;
