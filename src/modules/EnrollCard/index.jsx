import React from "react";
import dropdown from "../../images/down-arrow.svg";
import { EnrollBox, DropdownCustom, EnrollBox2 } from "./styled";

const EnrollCard = (props) => {
  const { isClick } = props;

  return (
    <div>
      {isClick ? (
        <EnrollBox2>
          <div>tuop</div>
          <div style={{ display: "flex" }}>
            <div>0/3</div>
            {isClick ? (
              <DropdownCustom src={dropdown} alt="dropdown" />
            ) : (
              <DropdownCustom
                style={{ transform: "scaleY(-1)" }}
                src={dropdown}
                alt="dropdown"
              />
            )}
          </div>
        </EnrollBox2>
      ) : (
        <EnrollBox>
          <div>tuop</div>
          <div style={{ display: "flex" }}>
            <div>0/3</div>
            {isClick ? (
              <DropdownCustom src={dropdown} alt="dropdown" />
            ) : (
              <DropdownCustom
                style={{ transform: "scaleY(-1)" }}
                src={dropdown}
                alt="dropdown"
              />
            )}
          </div>
        </EnrollBox>
      )}
    </div>
  );
};

export default EnrollCard;
