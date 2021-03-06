import React, { useState } from "react";
import {
  FormCustom,
  FormGroup,
  TextCustom,
  NotFoundCustom,
  CondiCustom,
} from "./styled";
import SkeletonEnrollClick from "../SkeletonEnrollClick";
import EnrollClick from "../EnrollClick";
import { SearchbyWord } from "../../utills/api";

const SearchDetail = (props) => {
  const { groupData, groupStudyId } = props;
  const [subjectCode, setSubjectCode] = useState("");
  const [dataSubject, setDataSubject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isStart, setIsStart] = useState(false);

  const OnChangeSetSubjectCode = (event) => {
    setSubjectCode(event.target.value);
    if (event.target.value.length > 4) {
      SearchbyWord(event.target.value, (res) => {
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

  const hasCredit = dataSubject.filter((dataFilter) =>
    groupStudyId.includes(dataFilter.id)
  );

  const hasNotCredit = dataSubject.filter(
    (dataFilter) => !groupStudyId.includes(dataFilter.id)
  );

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
        <div>{isStart && <SkeletonEnrollClick />}</div>
      ) : (
        <div>
          {isStart && dataSubject.length === 0 ? (
            <NotFoundCustom>ไม่พบข้อมูล</NotFoundCustom>
          ) : (
            <div>
              {hasCredit.length > 0 && (
                <div>
                  <CondiCustom>
                    *หมายเหตุ : สีเทาหมายถึงรายวิชาที่ผ่านการลงทะเบียน
                  </CondiCustom>
                  {hasCredit.map((dataGroup, index) => (
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
              )}
              <div>
                {hasNotCredit.map((dataGroup, index) => (
                  <EnrollClick
                    key={index}
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
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchDetail;
