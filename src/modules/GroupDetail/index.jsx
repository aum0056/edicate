import React, { useState, useEffect } from "react";
import { TextCustom, FormCustom } from "./styled";
import { Form } from "react-bootstrap";
import SkeletonEnrollClick from "../SkeletonEnrollClick";
import EnrollClick from "../EnrollClick";
import axios from "axios";

const GroupDetail = () => {
  const [subjectGroup, setsubjectGroup] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isStart, setIsStart] = useState(false);
  const onClickChoose = (event) => {
    setsubjectGroup(event.target.value);
    if (subjectGroup === "") {
      setIsStart(true);
    }
  };

  console.log(subjectGroup);

  useEffect(() => {
    axios({
      method: "POST",
      url: "http://localhost:8000/searchbygroup",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("x-access-token")}`,
      },
      data: {
        subjectGroup: subjectGroup,
      },
    }).then((res) => {
      setIsLoading(false);
      setData(res.data);
    });
  },[subjectGroup]);

  return (
    <div>
      <TextCustom>หมวดหมู่</TextCustom>
      <Form.Group>
        <FormCustom as="select" onClick={onClickChoose}>
          <option value="" hidden>
            กรุณาเลือกหมวด
          </option>
          <option value="พลเมืองไทยและพลเมืองโลก">
            กลุ่มสาระพลเมืองไทยและพลเมืองโลก
          </option>
          <option value="ภาษาและการสื่อสาร">กลุ่มสาระภาษากับการสื่อสาร</option>
          <option value="ศาสตร์แห่งผู้ประกอบการ">
            กลุ่มสาระศาสตร์แห่งผู้ประกอบการ
          </option>
          <option value="สุนทรียศาสตร์">กลุ่มสาระสุนทรียศาสตร์</option>
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
      {isLoading ? (
        <div>{isStart ? <SkeletonEnrollClick /> : null}</div>
      ) : (
        data.map((dataGroup) => (
          <EnrollClick
            id={dataGroup.id}
            thainame={dataGroup.thainame}
            engname={dataGroup.engname}
            group={dataGroup.group}
            credit={dataGroup.credit}
            NumPattern={0}
          />
        ))
      )}
    </div>
  );
};

export default GroupDetail;
