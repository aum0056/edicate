import React, { useState, useEffect } from "react";
import DetailCard from "../../modules/DetailCard";
import EnrollCard from "../../modules/EnrollCard";
import { TextBox, ContainerCustom } from "./styled";
import Navbar from "../../modules/Navbar";
import axios from "axios";
import SkeletonDetail from "../../modules/SkeletonDetail";

const DetailPage = () => {
  const [kdata, setKData] = useState();
  const [baseDetail, setBaseDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [subjects, setsubjects] = useState([]);

  useEffect(() => {
    axios({
      method: "POST",
      url: "http://localhost:8000/detail",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("x-access-token")}`,
      },
    }).then((res) => {
      setKData(res.data.data);
      setBaseDetail(res.data.baseDetail);
      setIsLoading(false);
      setsubjects(res.data.subject);
    });
  }, []);

  const CitizenGroup = subjects.filter(
    (data) => data.group === "พลเมืองไทยและพลเมืองโลก"
  );
  const LanguageGroup = subjects.filter(
    (data) => (data.group === "ภาษากับการสื่อสาร" && data.id !== "01355111")
  );
  const EnterpreneurGroup = subjects.filter(
    (data) => data.group === "ศาสตร์แห่งผู้ประกอบการ"
  );
  const AestheticsGroup = subjects.filter(
    (data) => data.group === "สุนทรียศาสตร์"
  );
  const HapinessGroup = subjects.filter(
    (data) => data.group === "อยู่ดีมีสุข"
  );

  return (
    <div>
      <Navbar NamePage="ข้อมูลนิสิต" />
      <ContainerCustom>
        {isLoading ? (
          <SkeletonDetail />
        ) : (
          <DetailCard
            genderThai={baseDetail?.titleTh || ""}
            ThaiFirstname={baseDetail?.firstNameTh || ""}
            ThaiLastname={baseDetail?.lastNameTh || ""}
            EngFirstname={baseDetail?.firstNameEn || ""}
            EngLastname={baseDetail?.lastNameEn || ""}
            id={baseDetail?.idcode || ""}
            faculty={kdata?.results?.education[0]?.facultyNameTh || ""}
            department={kdata?.results?.education[0]?.departmentNameTh || ""}
            idDepartment={kdata?.results?.education[0]?.majorCode || ""}
          />
        )}
        <TextBox>รายวิชาที่นิสิตลงทะเบียน</TextBox>
        <div style={{ marginBottom: "60px" }}>
          <EnrollCard NameGroup="พลเมืองไทยและพลเมืองโลก" subjectGroup={CitizenGroup} NumPattern={1} isLoading={isLoading} />
          <EnrollCard NameGroup="ภาษากับการสื่อสาร" subjectGroup={LanguageGroup} NumPattern={1} isLoading={isLoading} />
          <EnrollCard NameGroup="ศาสตร์แห่งผู้ประกอบการ" subjectGroup={EnterpreneurGroup} NumPattern={1} isLoading={isLoading} />
          <EnrollCard NameGroup="สุนทรียศาสตร์" subjectGroup={AestheticsGroup} NumPattern={1} isLoading={isLoading} />
          <EnrollCard NameGroup="อยู่ดีมีสุข" subjectGroup={HapinessGroup} NumPattern={1} isLoading={isLoading} />
        </div>
      </ContainerCustom>
    </div>
  );
};

export default DetailPage;
