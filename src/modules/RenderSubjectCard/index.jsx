import React from "react";
import EnrollClick from "../EnrollClick";
import { TextCustom } from "./styled";

const RenderSubjectCard = () => {
  return (
    <div>
      <TextCustom>รายวิชาบูรณาการที่เปิดให้ลงทะเบียน</TextCustom>
      <EnrollClick NameGroup="อยู่ดีมีสุข" NumPattern={0} />
    </div>
  );
};

export default RenderSubjectCard;
