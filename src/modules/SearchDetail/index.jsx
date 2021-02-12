import React, { useState } from "react";
import { FormCustom, FormGroup, TextCustom } from "./styled";
import SkeletonEnrollClick from "../SkeletonEnrollClick";
import axios from "axios";
import EnrollClick from "../EnrollClick";

const SearchDetail = (props) => {
  const { groupData, groupStudyId } = props;
  const [subjectCode, setSubjectCode] = useState("");
  const [dataSubject, setDataSubject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isStart, setIsStart] = useState(false);
  const OnChangeSetSubjectCode = (event) => {
    setSubjectCode(event.target.value);
    if (event.target.value.length > 4) {
      axios({
        method: "POST",
        url: "http://localhost:8000/search",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("x-access-token")}`,
        },
        data: {
          subjectCode: event.target.value,
        },
      }).then((res) => {
        setIsLoading(false);
        setDataSubject(res.data);
      });
      setIsStart(true);
    } else {
      setIsStart(false);
    }
  };

  const KeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      return false;
    }
  };

  return (
    <div>
      <TextCustom>ค้นหารายวิชา</TextCustom>
      <FormGroup>
        <FormCustom
          type="text"
          placeholder="ชื่อวิชา หรือ รหัสวิชา"
          value={subjectCode}
          onChange={OnChangeSetSubjectCode}
          onKeyPress={KeyPress}
        />
      </FormGroup>
      <TextCustom>รายวิชาบูรณาการที่เปิดให้ลงทะเบียน</TextCustom>
      {isLoading ? (
        <div>{isStart ? <SkeletonEnrollClick /> : null}</div>
      ) : (
        dataSubject.map((dataSubjectSearch) => (
          <EnrollClick
            id={dataSubjectSearch.id}
            thainame={dataSubjectSearch.thainame}
            engname={dataSubjectSearch.engname}
            group={dataSubjectSearch.group}
            credit={dataSubjectSearch.credit}
            NumPattern={0}
            type={groupData[0].type}
            colorState={groupStudyId.includes(dataSubjectSearch.id)}
          />
        ))
      )}
    </div>
  );
};

export default SearchDetail;
