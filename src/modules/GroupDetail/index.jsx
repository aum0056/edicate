import React from "react";
import { TextCustom } from "./styled";
import RenderGroup from "../RenderGroup";
import RenderSubjectCard from '../RenderSubjectCard'

const GroupDetail = () => {
  return (
    <div>
      <TextCustom>หมวดหมู่</TextCustom>
      <RenderGroup />
      <RenderSubjectCard />
    </div>
  );
};

export default GroupDetail;
