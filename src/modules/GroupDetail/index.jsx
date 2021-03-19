import React, { useState, useEffect } from "react";
import { TextCustom, FormCustom, CondiCustom, FormCheckCustom } from "./styled";
import { Form } from "react-bootstrap";
import SkeletonEnrollClick from "../SkeletonEnrollClick";
import EnrollClick from "../EnrollClick";
import { SearchbyGroup } from "../../utills/api";

const GroupDetail = (props) => {
  const { groupData, groupStudyId } = props;
  const [subjectGroup, setsubjectGroup] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [subjectInGroup, setSubjectInGroup] = useState([]);
  const [isEqual, setIsEqual] = useState(null);
  const [checkId, setCheckId] = useState("1");

  useEffect(() => {
    if (subjectInGroup !== null && subjectInGroup.length > 0) {
      if (subjectGroup !== subjectInGroup[0].group) {
        setIsLoading(true);
      } else {
        setIsEqual(true);
      }
    }
  }, [subjectGroup, subjectInGroup]);

  const onChangeChoose = (event) => {
    setsubjectGroup(event.target.value);
    SearchbyGroup(event.target.value, (res) => {
      setSubjectInGroup(res.data);
      setIsLoading(false);
    });
    setIsEqual(false);
  };

  const onClickCheck = (event) => {
    if (event.target.id !== "") {
      setCheckId(event.target.id);
    }
  };

  const hasCredit = subjectInGroup.filter((dataFilter) =>
    groupStudyId.includes(dataFilter.id)
  );

  const hasNotCredit = subjectInGroup.filter(
    (dataFilter) => !groupStudyId.includes(dataFilter.id)
  );

  return (
    <div>
      <TextCustom>หมวดหมู่</TextCustom>
      <Form.Group>
        <FormCustom as="select" onChange={onChangeChoose}>
          <option value="" hidden>
            กรุณาเลือกหมวด
          </option>
          {groupData[0].group.map((data, index) => (
            <option value={data} key={index}>
              {groupData[0].type}
              {data}
            </option>
          ))}
        </FormCustom>
      </Form.Group>

      <TextCustom>รายวิชาบูรณาการที่เปิดให้ลงทะเบียน</TextCustom>
      <Form style={{ margin: "10px 0" }} onClick={onClickCheck}>
        <FormCheckCustom
          custom
          inline
          type="radio"
          label="ทั้งหมด"
          name="ratio"
          id="1"
          defaultChecked="1"
        />
        <FormCheckCustom
          custom
          inline
          type="radio"
          label="ยอดนิยม"
          name="ratio"
          id="2"
        />
      </Form>
      {isEqual && !isLoading ? (
        <div>
          {checkId === "1" ? (
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
          ) : null}
        </div>
      ) : (
        <div>
          {!(isEqual === null || isLoading === null) && <SkeletonEnrollClick />}
        </div>
      )}
    </div>
  );
};

export default GroupDetail;
