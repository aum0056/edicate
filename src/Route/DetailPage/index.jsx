import React, { useState, useEffect } from "react";
import DetailCard from "../../modules/DetailCard";
import EnrollCard from "../../modules/EnrollCard";
import { TextBox, ContainerCustom } from "./styled";
import Navbar from "../../modules/Navbar";
import axios from "axios";
import SkeletonDetail from "../../modules/SkeletonDetail";
import SkeletonEnrollBoxs from "../../modules/SkeletonEnrollBoxs";

const DetailPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [keepBigData, setKeepBigData] = useState({
    detailData: null,
    courseData: null,
  });

  useEffect(() => {
    const FetchData = async () => {
      const detailBigData = await axios({
        method: "POST",
        url: "http://localhost:8000/detail",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("x-access-token")}`,
        },
      });
      const courseBigData = await axios({
        method: "POST",
        url: "http://localhost:8000/genedcourse",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("x-access-token")}`,
        },
      });
      setKeepBigData({
        detailData: detailBigData.data,
        courseData: courseBigData.data,
      });
      setIsLoading(false);
    };
    FetchData();
  }, []);

  const GroupData = (groupName) => {
    if (isLoading === false) {
      const subjectGroup = keepBigData.detailData.subject.filter(
        (data) => data.group === groupName && data.id !== "01355111"
      );
      return subjectGroup;
    }
  };

  return (
    <div>
      <Navbar NamePage="ข้อมูลนิสิต" />
      <ContainerCustom>
        {isLoading ? (
          <SkeletonDetail />
        ) : (
          <DetailCard
            genderThai={keepBigData.detailData.baseDetail.titleTh}
            ThaiFirstname={keepBigData.detailData.baseDetail.firstNameTh}
            ThaiLastname={keepBigData.detailData.baseDetail.lastNameTh}
            EngFirstname={keepBigData.detailData.baseDetail.firstNameEn}
            EngLastname={keepBigData.detailData.baseDetail.lastNameEn}
            id={keepBigData.detailData.baseDetail.idcode}
            faculty={
              keepBigData.detailData.data.results.education[0].facultyNameTh
            }
            department={
              keepBigData.detailData.data.results.education[0].departmentNameTh
            }
            idDepartment={
              keepBigData.detailData.data.results.education[0].majorCode
            }
          />
        )}
        <TextBox>รายวิชาที่นิสิตลงทะเบียน</TextBox>
        <div style={{ marginBottom: "60px" }}>
          {isLoading ? (
            <SkeletonEnrollBoxs />
          ) : (
            <div>
              {keepBigData.courseData[0].group.map((groupName) => (
                <EnrollCard
                  type={keepBigData.courseData[0].type}
                  NameGroup={groupName}
                  subjectGroup={GroupData(groupName)}
                  NumPattern={1}
                />
              ))}
            </div>
          )}
        </div>
      </ContainerCustom>
    </div>
  );
};

export default DetailPage;
