import React, { useState } from "react";
import dropdown from "../../images/down-arrow.svg";
import EnrollClick from "../EnrollClick";
import {
  EnrollBox,
  DropdownCustom,
  EnrollBox2,
  CondiBox,
  DropdownClick,
  EnrollHead,
} from "./styled";

const EnrollCard = (props) => {
  const { NumPattern, subjectGroup, NameGroup, type, courseData } = props;
  const [isClick, setIsClick] = useState(false);
  const onClickDropdown = () => {
    setIsClick(!isClick);
  };

  const allCredits = subjectGroup
    .map((filterSubjectGroup) => filterSubjectGroup.credit)
    .reduce((pre, cur) => pre + cur, 0);

  const totalcreditUse = () => {
    const totalcredit = courseData[0].group.filter(
      (data) => data.nameGroup === NameGroup
    );
    return totalcredit[0].credit;
  };

  const Header = courseData[0].group
    .filter((data) => data.nameGroup === NameGroup)
    .map((data) => data.fixedSubject);

  const SubjectInHeader = (NameHeader, id) => {
    const CheckSubject = Header[0]
      .filter((data) => data.name === NameHeader)
      .map((dataIdInHeader) => dataIdInHeader.subjectId)
      .flat(2)
      .map((data) => new RegExp(data).test(id));
    return CheckSubject;
  };

  const checkSubjectInHeader = (NameHeader, allCreditInGroup) => {
    const check = subjectGroup.map((dataSubject) =>
      SubjectInHeader(NameHeader, dataSubject.id)
        .filter((data) => data)
        .map((data) => dataSubject.id)
        .map((data) => haveIdIncludes(data, NameHeader, allCreditInGroup))
    );
    return check;
  };

  const haveIdIncludes = (dataId, NameHeader, allCreditInGroup) => {
    const haveHeader = subjectGroup.filter((data, index) =>
      data.id.includes(dataId)
    );
    const creditHave = haveHeader
      .map((data) => data.credit)
      .reduce((pre, cur) => pre + cur, 0);
    
    const haveNotHeader = subjectGroup.filter(
      (data) => !data.id.includes(dataId)
    );
    const creditNotHave = haveNotHeader
      .map((data) => data.credit)
      .reduce((pre, cur) => pre + cur, 0);

    return (
      <div>
        <EnrollHead>
          <div>{NameHeader}</div>
          <div>{ColorNumber(creditHave, allCreditInGroup)}</div>
        </EnrollHead>
        {haveHeader.map((dataSubject, index) => (
          <EnrollClick
            key={index}
            NameGroup={NameGroup}
            NumPattern={NumPattern}
            id={dataSubject.id}
            thainame={dataSubject.thainame}
            engname={dataSubject.engname}
            group={dataSubject.group}
            credit={dataSubject.credit}
            type={type}
          />
        ))}
        <EnrollHead>
          <div>กลุ่ม{NameGroup}</div>
          <div>{ColorNumber(creditNotHave, totalcreditUse()-allCreditInGroup)}</div>
        </EnrollHead>
        {haveNotHeader.map((dataSubject, index) => (
          <EnrollClick
            key={index}
            NameGroup={NameGroup}
            NumPattern={NumPattern}
            id={dataSubject.id}
            thainame={dataSubject.thainame}
            engname={dataSubject.engname}
            group={dataSubject.group}
            credit={dataSubject.credit}
            type={type}
          />
        ))}
      </div>
    );
  };

  const box = () => {
    return (
      <div>
        {Header[0].length > 0 ? (
          <div>
            {Header[0].map((data) => (
              <div>{checkSubjectInHeader(data.name, data.credit)}</div>
            ))}
          </div>
        ) : (
          <div>
            {subjectGroup.map((dataSubject, index) => (
              <EnrollClick
                key={index}
                NameGroup={NameGroup}
                NumPattern={NumPattern}
                id={dataSubject.id}
                thainame={dataSubject.thainame}
                engname={dataSubject.engname}
                group={dataSubject.group}
                credit={dataSubject.credit}
                type={type}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

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
            <div>
              {type}
              {NameGroup}
            </div>
            <CondiBox>
              {ColorNumber(allCredits, totalcreditUse())}
              {allCredits === 0 ? (
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
              {ColorNumber(allCredits, totalcreditUse())}
              <DropdownCustom src={dropdown} alt="dropdown" />
            </div>
          </EnrollBox>
        )}
      </div>
    );
  };

  return (
    <div onClick={onClickDropdown}>
      <div>{keepFunction()}</div>
      {isClick ? <div>{box()}</div> : null}
    </div>
  );
};

export default EnrollCard;
