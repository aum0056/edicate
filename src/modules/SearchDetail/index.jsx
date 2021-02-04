import React, { useState } from "react";
import { FormCustom, FormGroup, TextCustom } from "./styled";
import SkeletonEnrollClick from "../SkeletonEnrollClick"
import axios from "axios";

const SearchDetail = () => {
  const [subjectCode, setSubjectCode] = useState("");
  const [isLoading, setIsLoading] = useState(true)
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
        setIsLoading(false)
      });
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
        <SkeletonEnrollClick />
      ) : null}
      {/* <RenderSubjectCard /> */}
    </div>
  );
};

export default SearchDetail;
