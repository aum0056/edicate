import React, { useState, useEffect } from "react";
import DetailCard from "../../modules/DetailCard";
import EnrollCard from "../../modules/EnrollCard";
import { TextBox, ContainerCustom } from "./styled";
import Navbar from "../../modules/Navbar";
import axios from "axios";
import SkeletonDetail from "../../modules/SkeletonDetail";
import SkeletonEnrollBoxs from "../../modules/SkeletonEnrollBoxs";
import jwt_decode from "jwt-decode";

const DetailPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [keepBigData, setKeepBigData] = useState({
    detailData: null,
    courseData: null,
  });

  const token = jwt_decode(localStorage.getItem("x-access-token"));

  useEffect(() => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (
      keepBigData.detailData !== null &&
      localStorage.getItem(`image: ${token.idcode}`) === null
    ) {
      localStorage.setItem(
        `image: ${token.idcode}`,
        keepBigData.detailData.image
      );
    }
  }, [keepBigData.detailData, token.idcode]);

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
            genderThai={token.titleTh}
            ThaiFirstname={token.firstNameTh}
            ThaiLastname={token.lastNameTh}
            EngFirstname={token.firstNameEn}
            EngLastname={token.lastNameEn}
            id={token.idcode}
            faculty={
              keepBigData.detailData.data.results.education[0].facultyNameTh
            }
            department={
              keepBigData.detailData.data.results.education[0].departmentNameTh
            }
            idDepartment={
              keepBigData.detailData.data.results.education[0].majorCode
            }
            pic={localStorage.getItem(`image: ${token.idcode}`)}
          />
        )}
        <TextBox>รายวิชาที่นิสิตลงทะเบียน</TextBox>
        <div style={{ marginBottom: "60px" }}>
          {isLoading ? (
            <SkeletonEnrollBoxs />
          ) : (
            <div>
              {keepBigData.courseData[0].group.map((groupName, index) => (
                <EnrollCard
                  key={index}
                  type={keepBigData.courseData[0].type}
                  NameGroup={groupName}
                  subjectGroup={GroupData(groupName)}
                  NumPattern={1}
                  courseData={keepBigData.detailData.course}
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
