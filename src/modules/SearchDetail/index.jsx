import React, { useState } from "react";
import { FormCustom, FormGroup, TextCustom } from "./styled";
import SkeletonEnrollClick from "../SkeletonEnrollClick";
import axios from "axios";
import EnrollClick from "../EnrollClick";

const SearchDetail = () => {
  const [subjectCode, setSubjectCode] = useState("");
  const [data, setData] = useState([]);
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
        setData(res.data);
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
        data.map((dataSearch) => (
          <EnrollClick
            id={dataSearch.id}
            thainame={dataSearch.thainame}
            engname={dataSearch.engname}
            group={dataSearch.group}
            credit={dataSearch.credit}
            NumPattern={0}
          />
        ))
      )}
    </div>
  );
};

export default SearchDetail;
