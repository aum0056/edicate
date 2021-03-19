import React, { useState } from "react";
import dropdown from "../../images/down-arrow.svg";
import EnrollClick from "../EnrollClick";
import { EnrollBox, DropdownCustom, CondiBox, EnrollHead } from "./styled";
import { Collapse } from "react-bootstrap";

const EnrollCard = (props) => {
  const { NumPattern, subjectGroup, NameGroup, type, courseData } = props;
  const [isClick, setIsClick] = useState(false);
  var overSubject = [];

  const onClickDropdown = () => {
    setIsClick(!isClick);
  };

  const allCredits = subjectGroup
    .map((filterSubjectGroup) => filterSubjectGroup.credit)
    .reduce((pre, cur) => pre + cur, 0);

  const totalcredit = courseData[0].group.filter(
    (data) => data.nameGroup === NameGroup
  )[0].credit;

  const Header = courseData[0].group
    .filter((data) => data.nameGroup === NameGroup)
    .map((data) => data.fixedSubject)[0];

  const creditForNotInclude = Header.map((data) => data.credit).reduce(
    (pre, cur) => pre + cur,
    0
  );

  const checkRegEx = (id, subjectArray) => {
    const returnRegex = subjectArray.map((data) => new RegExp(data).test(id));
    return returnRegex;
  };

  const InCludeRender = () => {
    const fixSubjectMap = (NameHeader) => {
      const checkSubject = Header.filter((data) => data.name === NameHeader);
      const renderGroup = subjectGroup.map((dataS) =>
        checkRegEx(dataS.id, checkSubject[0].subjectId)
          .filter((data) => data)
          .map((data) => dataS.id)
      );

      const include = subjectGroup.filter((data) =>
        renderGroup.flat(1).includes(data.id)
      );

      let count = 0;
      for (let i = 0; i < include.length; i++) {
        count += include[i].credit;
        if (count > checkSubject[0].credit) {
          overSubject.push(include[i].id);
        }
      }

      const includeInScope = include.filter(
        (data) => !overSubject.includes(data.id)
      );
      return includeInScope;
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
        {Header.length > 0 ? (
          <div>
            {Header.map((data, index) => (
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

  const NotIncludeRender = () => {
    const fixSubjectMap = Header.map((data) => data.subjectId).flat(1);
    const groupCheck = () => {
      const renderGroup = subjectGroup.map((dataS) =>
        checkRegEx(dataS.id, fixSubjectMap)
          .filter((data) => data)
          .map((data) => dataS.id)
      );
      const renderGroupNotOver = renderGroup
        .flat(1)
        .filter((data) => !overSubject.includes(data));

      return renderGroupNotOver;
    };

    if (fixSubjectMap.length > 0) {
      const notInclude = subjectGroup.filter(
        (data) => !groupCheck().includes(data.id)
      );

      const creditNotInclude = notInclude
        .map((data) => data.credit)
        .reduce((pre, cur) => pre + cur, 0);

      return (
        <div>
          {creditNotInclude > 0 && (
            <div>
              <EnrollHead>
                <div>กลุ่ม{NameGroup}</div>
                <div>
                  {ColorNumber(
                    creditNotInclude,
                    totalcredit - creditForNotInclude
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
          )}
        </div>
      );
    }
  };

  const ColorNumber = (credits, totalcredit) => {
    const defineColor = (EqColor, notEq) => {
      return (
        <CondiBox style={{ color: `#${EqColor}` }}>
          <div style={{ color: `#${notEq}` }}>{credits}</div>
          <div>/{totalcredit}</div>
        </CondiBox>
      );
    };

    if (credits === totalcredit) {
      return defineColor("02BC77");
    } else if (credits < totalcredit) {
      return defineColor("000", "8B8B8B");
    } else {
      return defineColor("000", "FD0404");
    }
  };

  const barCustom = () => {
    return (
      <div>
        <EnrollBox isClick={isClick}>
          <div>
            {type}
            {NameGroup}
          </div>
          <div style={{ display: "flex" }}>
            {ColorNumber(allCredits, totalcredit)}
            <DropdownCustom
              isClick={isClick && allCredits > 0}
              src={dropdown}
              alt="dropdown"
            />
          </div>
        </EnrollBox>
      </div>
    );
  };

  return (
    <div>
      <div onClick={onClickDropdown}>{barCustom()}</div>
      <Collapse in={isClick}>
        <div>
          {InCludeRender()}
          {NotIncludeRender()}
        </div>
      </Collapse>
    </div>
  );
};

export default EnrollCard;
