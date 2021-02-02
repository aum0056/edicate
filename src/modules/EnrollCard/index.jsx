import React, { useState } from "react";
import dropdown from "../../images/down-arrow.svg";
import EnrollClick from "../EnrollClick";
import {
  EnrollBox,
  DropdownCustom,
  EnrollBox2,
  CondiBox,
  DropdownClick,
} from "./styled";
import testdata from "../../testdata.json";
import creditdata from "../../genEdCredit.json";

const EnrollCard = (props) => {
  const { NameGroup, NumPattern } = props;
  const [isClick, setIsClick] = useState(false);
  const onClickDropdown = () => {
    setIsClick(!isClick);
  };
  const testStudentSubject = testdata.SubjectDetail;

  const credit = testStudentSubject
    .filter((data) => data.group === NameGroup)
    .map((filterCredit) => filterCredit.credit)
    .reduce((pre, cur) => pre + cur, 0);

  const totalcredit = creditdata
    .filter((data) => data.name === NameGroup)
    .map((filterCredit) => filterCredit.credit)
    .reduce((pre, cur) => pre + cur, 0);

  const ColorNumber = () => {
    if (credit === totalcredit) {
      return (
        <CondiBox style={{ color: "#02BC77" }}>
          <div>{credit}</div>
          <div>/{totalcredit}</div>
        </CondiBox>
      );
    } else if (credit < totalcredit) {
      return (
        <CondiBox>
          <div style={{ color: "#8B8B8B" }}>{credit}</div>
          <div>/{totalcredit}</div>
        </CondiBox>
      );
    } else {
      return (
        <CondiBox>
          <div style={{ color: "#FD0404" }}>{credit}</div>
          <div>/{totalcredit}</div>
        </CondiBox>
      );
    }
  };

  const keepFunction = () => {
    return (
      <div>
        {isClick ? (
          <EnrollBox2>
            <div>กลุ่ม{NameGroup}</div>
            <CondiBox>
              {ColorNumber()}
              {credit === 0 ? (
                <DropdownCustom src={dropdown} alt="dropdown" />
              ) : (
                <DropdownClick src={dropdown} alt="dropdownClick" />
              )}
            </CondiBox>
          </EnrollBox2>
        ) : (
          <EnrollBox>
            <div>กลุ่ม{NameGroup}</div>
            <div style={{ display: "flex" }}>
              {ColorNumber()}
              <DropdownCustom src={dropdown} alt="dropdown" />
            </div>
          </EnrollBox>
        )}
      </div>
    );
  };
  return (
    <div onClick={onClickDropdown}>
      {keepFunction()}
      {isClick ? (
        <EnrollClick NameGroup={NameGroup} NumPattern={NumPattern} />
      ) : null}
    </div>
  );
};

export default EnrollCard;
