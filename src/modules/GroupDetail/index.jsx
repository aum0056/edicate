import React, { useState, useEffect } from "react";
import { TextCustom, FormCustom } from "./styled";
import { Form } from "react-bootstrap";
import SkeletonEnrollClick from "../SkeletonEnrollClick";
import EnrollClick from "../EnrollClick";
import axios from "axios";

const GroupDetail = (props) => {
  const { groupData, groupStudyId } = props;
  const [subjectGroup, setsubjectGroup] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [subjectInGroup, setSubjectInGroup] = useState([]);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    const FetchData = async () => {
      const data = await axios({
        method: "POST",
        url: "http://localhost:8000/searchbygroup",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("x-access-token")}`,
        },
        data: {
          subjectGroup: subjectGroup,
        },
      });
      setSubjectInGroup(data.data);
      setIsLoading(false);
    };
    FetchData();
  }, [subjectGroup]);

  const onClickChoose = (event) => {
    setsubjectGroup(event.target.value);
    if (subjectGroup === "") {
      setIsStart(true);
    }
  };

  return (
    <div>
      <TextCustom>หมวดหมู่</TextCustom>
      <Form.Group>
        {isLoading ? null : (
          <FormCustom as="select" onClick={onClickChoose}>
            <option value="" hidden>
              กรุณาเลือกหมวด
            </option>
            {groupData[0].group.map((data) => (
              <option value={data}>
                {groupData[0].type}
                {data}
              </option>
            ))}
          </FormCustom>
        )}
      </Form.Group>

      <TextCustom>รายวิชาบูรณาการที่เปิดให้ลงทะเบียน</TextCustom>
      {isLoading ? (
        <div>{isStart ? <SkeletonEnrollClick /> : null}</div>
      ) : (
        subjectInGroup.map((dataGroup) => (
          <EnrollClick
            id={dataGroup.id}
            thainame={dataGroup.thainame}
            engname={dataGroup.engname}
            group={dataGroup.group}
            credit={dataGroup.credit}
            NumPattern={0}
            colorState={groupStudyId.includes(dataGroup.id)}
          />
        ))
      )}
    </div>
  );
};

export default GroupDetail;
