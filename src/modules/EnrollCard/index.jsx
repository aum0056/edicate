import React, { useState } from "react";
import dropdown from "../../images/down-arrow.svg";
import EnrollClick from "../EnrollClick";
import { EnrollBox, DropdownCustom, EnrollBox2,CondiBox } from "./styled";
import testdata from "../../testdata.json";
import creditdata from "../../genEdCredit.json";

const EnrollCard = (props) => {
  const { NameGroup } = props;
  const [test, setTest] = useState(false);
  const onClicktestClick = () => {
    setTest(!test);
  };
const testStudentSubject = testdata.SubjectDetail;

const credit = testStudentSubject
  .filter((data) => data.group === NameGroup)
  .map((filterCredit) => filterCredit.credit)
  .reduce((pre, cur) => pre + cur, 0)

const totalcredit = creditdata
  .filter((data) => data.name === NameGroup)
  .map((filterCredit) => filterCredit.credit)
  .reduce((pre, cur) => pre + cur, 0)

const isEqual = credit === totalcredit

const theme = {
  main: "mediumseagreen"
};

  const keepFunction = () => {
    return (
      <div>
        {test ? (
          <EnrollBox2>
            <div>กลุ่ม{NameGroup}</div>
            <div style={{ display: "flex" }}>
              <CondiBox theme={isEqual&&theme}>
                  {credit}
                /{totalcredit}
              </CondiBox>
              <DropdownCustom src={dropdown} alt="dropdown" />
            </div>
          </EnrollBox2>
        ) : (
          <EnrollBox >
            <div>กลุ่ม{NameGroup}</div>
            <div style={{ display: "flex" }}>
              <CondiBox theme={isEqual&&theme}>
                  {credit}
                /{totalcredit}
              </CondiBox>
              <DropdownCustom
                style={{ transform: "scaleY(-1)" }}
                src={dropdown}
                alt="dropdown"
              />
            </div>
          </EnrollBox>
        )}
      </div>
    );
  };
  return (
    <div onClick={onClicktestClick}>
      {keepFunction()}
      {test ? <EnrollClick NameGroup={NameGroup} /> : null}
    </div>
  );
};

export default EnrollCard;
