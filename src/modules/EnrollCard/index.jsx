import React, { useState } from "react";
import dropdown from "../../images/down-arrow.svg";
import EnrollClick from "../EnrollClick";
import {
  EnrollBox,
  DropdownCustom,
  EnrollBox2,
  CondiBox,
  DropdownClick,
  EnrollHap,
} from "./styled";
import creditdata from "../../genEdCredit.json";

const EnrollCard = (props) => {
  const { NumPattern, subjectGroup, NameGroup, type } = props;
  const [isClick, setIsClick] = useState(false);
  const onClickDropdown = () => {
    setIsClick(!isClick);
  };

  const totalcredit = creditdata
    .filter((data) => data.name === NameGroup)
    .map((filterCredit) => filterCredit.credit)
    .reduce((pre, cur) => pre + cur, 0);

  const credits = subjectGroup
    .map((filterSubjectGroup) => filterSubjectGroup.credit)
    .reduce((pre, cur) => pre + cur, 0);

  const HapiIsHapi = subjectGroup.filter((data) => !data.id.includes("01175"));
  const ExIsHapi = subjectGroup.filter((data) => data.id.includes("01175"));

  if (ExIsHapi.length > 1) {
    HapiIsHapi.concat(ExIsHapi.slice(1));
    ExIsHapi.slice(0, 1);
  }

  const CreditHapi = HapiIsHapi.map((map) => map.credit).reduce(
    (pre, cur) => pre + cur,
    0
  );
  const CreditEx = ExIsHapi.map((map) => map.credit).reduce(
    (pre, cur) => pre + cur,
    0
  );

  const ColorNumber = (credits, totalcredit) => {
    if (credits === totalcredit) {
      return (
        <CondiBox style={{ color: "#02BC77" }}>
          <div>{credits}</div>
          <div>/{totalcredit}</div>
        </CondiBox>
      );
    } else if (credits < totalcredit) {
      return (
        <CondiBox>
          <div style={{ color: "#8B8B8B" }}>{credits}</div>
          <div>/{totalcredit}</div>
        </CondiBox>
      );
    } else {
      return (
        <CondiBox>
          <div style={{ color: "#FD0404" }}>{credits}</div>
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
            <div>กลุ่มสาระ{NameGroup}</div>
            <CondiBox>
              {ColorNumber(credits, totalcredit)}
              {credits === 0 ? (
                <DropdownCustom src={dropdown} alt="dropdown" />
              ) : (
                <DropdownClick src={dropdown} alt="dropdownClick" />
              )}
            </CondiBox>
          </EnrollBox2>
        ) : (
          <EnrollBox>
            <div>
              {type}
              {NameGroup}
            </div>
            <div style={{ display: "flex" }}>
              {ColorNumber(credits, totalcredit)}
              <DropdownCustom src={dropdown} alt="dropdown" />
            </div>
          </EnrollBox>
        )}
      </div>
    );
  };

  const HappinessCondition = () => {
    return (
      <div>
        {NameGroup === "อยู่ดีมีสุข" ? (
          <div>
            <EnrollHap>
              <div>กิจกรรมพลศึกษา</div>
              {ColorNumber(CreditEx, 1)}
            </EnrollHap>
            <div>
              {ExIsHapi.map((filterSubject) => (
                <EnrollClick
                  NameGroup={NameGroup}
                  NumPattern={NumPattern}
                  id={filterSubject.id}
                  thainame={filterSubject.thainame}
                  engname={filterSubject.engname}
                  group={filterSubject.group}
                  credit={filterSubject.credit}
                />
              ))}
            </div>
            <EnrollHap>
              <div>กลุ่มอยู่ดีมีสุข</div>
              {ColorNumber(CreditHapi, 5)}
            </EnrollHap>
            <div>
              {HapiIsHapi.map((filterSubject) => (
                <EnrollClick
                  NameGroup={NameGroup}
                  NumPattern={NumPattern}
                  id={filterSubject.id}
                  thainame={filterSubject.thainame}
                  engname={filterSubject.engname}
                  group={filterSubject.group}
                  credit={filterSubject.credit}
                />
              ))}
            </div>
          </div>
        ) : (
          <div>
            {subjectGroup.map((filterSubject) => (
              <EnrollClick
                NameGroup={NameGroup}
                NumPattern={NumPattern}
                id={filterSubject.id}
                thainame={filterSubject.thainame}
                engname={filterSubject.engname}
                group={filterSubject.group}
                credit={filterSubject.credit}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div onClick={onClickDropdown}>
      <div>{keepFunction()}</div>
      {isClick ? <div>{HappinessCondition()}</div> : null}
    </div>
  );
};

export default EnrollCard;
