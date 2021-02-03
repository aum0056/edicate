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
    });
  }, []);

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
          <EnrollCard NameGroup="พลเมืองไทยและพลเมืองโลก" NumPattern={1} />
          <EnrollCard NameGroup="ภาษากับการสื่อสาร" NumPattern={1} />
          <EnrollCard NameGroup="ศาสตร์แห่งผู้ประกอบการ" NumPattern={1} />
          <EnrollCard NameGroup="สุนทรียศาสตร์" NumPattern={1} />
          <EnrollCard NameGroup="อยู่ดีมีสุข" NumPattern={1} />
          <EnrollCard NameGroup="เสรี" NumPattern={1} />
        </div>
      </ContainerCustom>
    </div>
  );
};

export default DetailPage;
