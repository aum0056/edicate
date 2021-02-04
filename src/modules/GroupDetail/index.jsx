import React, { useState, useEffect } from "react";
import { TextCustom, FormCustom } from "./styled";
import { Form } from "react-bootstrap";
import SkeletonEnrollClick from "../SkeletonEnrollClick";
import axios from "axios";

const GroupDetail = () => {
  const [subjectGroup, setsubjectGroup] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const onClickChoose = (event) => {
    setsubjectGroup(event.target.value);
  };

  useEffect(() => {
    axios({
      method: "POST",
      url: "http://localhost:8000/search",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("x-access-token")}`,
      },
      data: {
        subjectGroup: subjectGroup,
      },
    }).then((res) => {
      setIsLoading(true);
    });
  });

  console.log(subjectGroup);

  return (
    <div>
      <TextCustom>หมวดหมู่</TextCustom>
      <Form.Group>
        <FormCustom as="select" onClick={onClickChoose}>
          <option value="" hidden>เลือกหมวดหมู่</option>
          <option value="พลเมืองไทยและพลเมืองโลก">
            กลุ่มสาระพลเมืองไทยและพลเมืองโลก
          </option>
          <option value="ภาษาและการสื่อสาร">กลุ่มสาระภาษาและการสื่อสาร</option>
          <option value="ศาสตร์แห่งผู้ประกอบการ">
            กลุ่มสาระศาสตร์แห่งผู้ประกอบการ
          </option>
          <option value="สุนทรีศาสตร์">กลุ่มสาระสุนทรีศาสตร์</option>
          <option value="อยู่ดีมีสุข">กลุ่มสาระอยู่ดีมีสุข</option>
        </FormCustom>
      </Form.Group>

      {/* <Form.Group>
        <FormCustom as="select" onClick={onClickChoose}>
          <option value="วิทยาศาสตร์และคณิตศาสตร์">
            กลุ่มวิชาวิทยาศาสตร์และคณิตศาสตร์
          </option>
          <option value="มนุษยศาสตร์">กลุ่มวิชามนุษยศาสตร์</option>
          <option value="สังคมศาสตร์">
            กลุ่มวิชาสังคมศาสตร์
          </option>
          <option value="ภาษา">กลุ่มวิชาภาษา</option>
          <option value="พลศึกษา">กลุ่มวิชาพลศึกษา</option>
        </FormCustom>
      </Form.Group> */}

      <TextCustom>รายวิชาบูรณาการที่เปิดให้ลงทะเบียน</TextCustom>
      {isLoading ? <SkeletonEnrollClick /> : null}
    </div>
  );
};

export default GroupDetail;
