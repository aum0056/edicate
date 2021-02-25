import React, { useState, useRef } from "react";
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
  const ref = useRef(null);
  const onClickDropdown = () => {
    setIsClick(!isClick);
    ref.current.scrollIntoView({
      behavior: "smooth",
      // block: 'start',
      // inline: "nearest"
    });
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

  const InCludeRender = () => {
    const fixSubjectMap = (NameHeader) => {
      const checkSubject = Header[0].filter((data) => data.name === NameHeader);
      const Checkregex = (id) =>
        checkSubject[0].subjectId.map((data) => new RegExp(data).test(id));
      const renderGroup = subjectGroup.map((dataS) =>
        Checkregex(dataS.id)
          .filter((data) => data)
          .map((data) => dataS.id)
      );
      const include = subjectGroup.filter((data) =>
        renderGroup.flat(1).includes(data.id)
      );

      if (NameHeader === "กิจกรรมพลศึกษา") {
        return [include[0]];
      } else {
        return include;
      }
    };

    const creditInclude = (NameHeader) => {
      const credit = fixSubjectMap(NameHeader)
        .map((data) => data.credit)
        .reduce((pre, cur) => pre + cur, 0);
      return credit;
    };
    const renderSubjectInclude = (NameHeader) => {
      return (
        <div>
          {fixSubjectMap(NameHeader).map((dataSubject, index) => (
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

    return (
      <div>
        {Header[0].length > 0 ? (
          <div>
            {Header[0].map((data, index) => (
              <div key={index}>
                <EnrollHead>
                  <div>{data.name}</div>
                  <div>
                    {ColorNumber(creditInclude(data.name), data.credit)}
                  </div>
                </EnrollHead>
                {renderSubjectInclude(data.name)}
              </div>
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

  const NotIncludeRender = (NameHeader) => {
    const fixSubjectMap = Header[0].map((data) => data.subjectId).flat(1);
    if (fixSubjectMap.length > 0) {
      const checkRegEx = (id) =>
        fixSubjectMap.map((data) => new RegExp(data).test(id));
      const renderGroup = subjectGroup.map((dataS) =>
        checkRegEx(dataS.id)
          .filter((data) => data)
          .map((data) => dataS.id)
      );
      const notInclude = subjectGroup.filter(
        (data) => !renderGroup.flat(1).includes(data.id)
      );

      const creditNotInclude = notInclude
        .map((data) => data.credit)
        .reduce((pre, cur) => pre + cur, 0);

      const include = subjectGroup.filter((data) =>
        renderGroup.flat(1).includes(data.id)
      );
      const creditInclude = include
        .map((data) => data.credit)
        .reduce((pre, cur) => pre + cur, 0);

      return (
        <div>
          {creditNotInclude > 0 ? (
            <div>
              <EnrollHead>
                <div>กลุ่ม{NameGroup}</div>
                <div>
                  {ColorNumber(
                    creditNotInclude,
                    totalcreditUse() - creditInclude
                  )}
                </div>
              </EnrollHead>
              <div>
                {notInclude.map((dataSubject, index) => (
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
            </div>
          ) : null}
        </div>
      );
    }
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

  const barCustom = () => {
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
    <div onClick={onClickDropdown} ref={ref}>
      <div>{barCustom()}</div>
      {isClick ? (
        <div>
          {InCludeRender()}
          {NotIncludeRender()}
        </div>
      ) : null}
    </div>
  );
};

export default EnrollCard;
