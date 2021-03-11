import React, { useState, useEffect } from "react";
import { TextCustom, FormCustom, CondiCustom } from "./styled";
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
    try {
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
      };
      setIsLoading(false);
      FetchData();
    } catch (error) {
      console.log(error);
    }
  }, [subjectGroup]);

  const onClickChoose = (event) => {
    setsubjectGroup(event.target.value);
    if (event.target.value !== "") {
      setIsStart(true);
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
        <FormCustom as="select" onClick={onClickChoose}>
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
      {isLoading ? null : (
        <div>
          {isStart ? (
            <div>
              {subjectInGroup.length === 0 ? (
                <SkeletonEnrollClick />
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
          ) : null}
        </div>
      )}
    </div>
  );
};

export default GroupDetail;
