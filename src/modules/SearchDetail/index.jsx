import React, { useState, useEffect } from "react";
import { FormCustom, FormGroup, TextCustom } from "./styled";
import RenderSubjectCard from "../RenderSubjectCard";
import axios from "axios"

const SearchDetail = () => {
  const [subjectCode, setSubjectCode] = useState("");
  const OnChangeSetSubjectCode = (event) => {
    setSubjectCode(event.target.value);

    // useEffect(() => {
    //   axios({
    //       method: "POST",
    //       url: "http://localhost:8000/detail",
    //       headers: {
    //         Authorization: `Bearer ${localStorage.getItem("x-access-token")}`,
    //       },
    // data : {
    //   subjectCode: event.target.value
    // }
    //     }).then((res) => {
      // setSubjectCode(event.target.value);
    //     });
    // }, []);
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
        />
      </FormGroup>
      <RenderSubjectCard />
    </div>
  );
};

export default SearchDetail;
