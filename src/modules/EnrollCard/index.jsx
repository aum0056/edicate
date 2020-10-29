import React from "react";
import dropdown from "../../images/down-arrow.svg";
import { EnrollBox, DropdownCustom } from "./styled";

const EnrollCard = () => {
  return (
    <EnrollBox>
      <div>tuop</div>
      <div style={{display: 'flex'}}>
        <div>0/3</div>
        <DropdownCustom src={dropdown} alt="dropdown" />
      </div>
    </EnrollBox>
  );
};

export default EnrollCard;
