import React, { useState } from "react";
import {
  FormCustom,
  FormGroup,
  TextCustom,
  NotFoundCustom,
  CondiCustom,
} from "./styled";
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
        setDataSubject(res.data);
        setIsLoading(false);
      });
      setIsStart(true);
    } else {
      setIsLoading(true);
      setIsStart(false);
    }
  };

  const KeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      return false;
    }
  };

  const hasCredit = () => {
    return (
      <div>
        {dataSubject
          .filter((dataFilter) => groupStudyId.includes(dataFilter.id))
          .map((dataGroup, index) => (
            <EnrollClick
              key={index}
              id={dataGroup.id}
              thainame={dataGroup.thainame}
              engname={dataGroup.engname}
              group={dataGroup.group}
              credit={dataGroup.credit}
              NumPattern={0}
              colorState={true}
              type={groupData[0].type}
            />
          ))}
      </div>
    );
  };

  const hasNotCredit = () => {
    return (
      <div>
        {dataSubject
          .filter((dataFilter) => !groupStudyId.includes(dataFilter.id))
          .map((dataGroup) => (
            <EnrollClick
              id={dataGroup.id}
              thainame={dataGroup.thainame}
              engname={dataGroup.engname}
              group={dataGroup.group}
              credit={dataGroup.credit}
              NumPattern={0}
              colorState={false}
              type={groupData[0].type}
            />
          ))}
      </div>
    );
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
        <div>
          {isStart && dataSubject.length === 0 ? (
            <NotFoundCustom>ไม่พบข้อมูล</NotFoundCustom>
          ) : (
            <div>
              <CondiCustom>
                *หมายเหตุ : สีเทาหมายถึงรายวิชาที่ผ่านการลงทะเบียน
              </CondiCustom>
              <div>{hasCredit()}</div>
              <div>{hasNotCredit()}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchDetail;
