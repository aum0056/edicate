import React from "react";
import { FormCustom, FormGroup, TextCustom } from "./styled";
import RenderSubjectCard from '../RenderSubjectCard'

const SearchDetail = () => {
  return (
    <div>
      <TextCustom>ค้นหารายวิชา</TextCustom>
      <FormGroup>
        <FormCustom type="text" placeholder="ชื่อวิชา หรือ รหัสวิชา" />
      </FormGroup>
      <RenderSubjectCard />
    </div>
  );
};

export default SearchDetail;
