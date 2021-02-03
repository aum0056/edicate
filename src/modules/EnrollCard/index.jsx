import React, { useState, useEffect } from "react";
import dropdown from "../../images/down-arrow.svg";
import EnrollClick from "../EnrollClick";
import {
  EnrollBox,
  DropdownCustom,
  EnrollBox2,
  CondiBox,
  DropdownClick,
  SkeletonEnrollBox,
} from "./styled";
import creditdata from "../../genEdCredit.json";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

const EnrollCard = (props) => {
  const { NameGroup, NumPattern } = props;
  const [isClick, setIsClick] = useState(false);
  const [credit, setCredit] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const onClickDropdown = () => {
    setIsClick(!isClick);
  };

  const totalcredit = creditdata
    .filter((data) => data.name === NameGroup)
    .map((filterCredit) => filterCredit.credit)
    .reduce((pre, cur) => pre + cur, 0);

  useEffect(() => {
    axios({
      method: "POST",
      url: "http://localhost:8000/detail",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("x-access-token")}`,
      },
    }).then((res) => {
      setCredit(res.data.subject);
      setIsLoading(false);
    });
  }, []);

  const creditUse = credit
    .filter((data) => data.group === NameGroup)
    .map((filterCredit) => filterCredit.credit)
    .reduce((pre, cur) => pre + cur, 0);

  const ColorNumber = () => {
    if (creditUse === totalcredit) {
      return (
        <CondiBox style={{ color: "#02BC77" }}>
          <div>{creditUse}</div>
          <div>/{totalcredit}</div>
        </CondiBox>
      );
    } else if (creditUse < totalcredit) {
      return (
        <CondiBox>
          <div style={{ color: "#8B8B8B" }}>{creditUse}</div>
          <div>/{totalcredit}</div>
        </CondiBox>
      );
    } else {
      return (
        <CondiBox>
          <div style={{ color: "#FD0404" }}>{creditUse}</div>
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
              {creditUse === 0 ? (
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
      {isLoading ? (
        <SkeletonEnrollBox>
          <Skeleton count={1} width={150} />
          <Skeleton count={1} />
        </SkeletonEnrollBox>
      ) : (
        <div>{keepFunction()}</div>
      )}
      {isClick ? (
        <EnrollClick NameGroup={NameGroup} NumPattern={NumPattern} />
      ) : null}
    </div>
  );
};

export default EnrollCard;
