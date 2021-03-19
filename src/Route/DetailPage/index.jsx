import React, { useState, useEffect } from "react";
import DetailCard from "../../modules/DetailCard";
import EnrollCard from "../../modules/EnrollCard";
import { TextBox, ContainerCustom } from "./styled";
import Navbar from "../../modules/Navbar";
import SkeletonDetail from "../../modules/SkeletonDetail";
import SkeletonEnrollBoxs from "../../modules/SkeletonEnrollBoxs";
import jwt_decode from "jwt-decode";
import { GetDetailGened, GetImage } from "../../utills/api";

const DetailPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [keepBigData, setKeepBigData] = useState(null);
  const [imgStatus, setImgStatus] = useState(null);
  const token = jwt_decode(localStorage.getItem("x-access-token"));

  useEffect(() => {
    if (localStorage.getItem(`image: ${token.idcode}`)) {
      setImgStatus(true);
    } else {
      setImgStatus(false);
    }
  }, [token.idcode]);

  useEffect(() => {
    GetDetailGened((detailBigData) => {
      setKeepBigData(detailBigData.data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!imgStatus) {
      GetImage((res) => {
        localStorage.setItem(`image: ${token.idcode}`, res.data.image);
      });
    }
  }, [imgStatus, token.idcode]);

  const GroupData = (groupName) => {
    if (!isLoading) {
      const subjectGroup = keepBigData.subject.filter(
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
              keepBigData.data.results.education[0].facultyNameTh
            }
            department={
              keepBigData.data.results.education[0].departmentNameTh
            }
            idDepartment={
              keepBigData.data.results.education[0].majorCode
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
              {keepBigData.genedcourse[0].group.map(
                (groupName, index) => (
                  <EnrollCard
                    key={index}
                    type={keepBigData.genedcourse[0].type}
                    NameGroup={groupName}
                    subjectGroup={GroupData(groupName)}
                    NumPattern={1}
                    courseData={keepBigData.course}
                  />
                )
              )}
            </div>
          )}
        </div>
      </ContainerCustom>
    </div>
  );
};

export default DetailPage;
