import React from "react";
import DetailCard from "../../modules/DetailCard";
import EnrollCard from "../../modules/EnrollCard";
import { TextBox, ContainerCustom } from "./styled";
import testdata from "../../testdata.json";
import Navbar from '../../modules/Navbar'

const DetailPage = () => {
  const testStudentDetail = testdata.DataDetail;
  return (
    <div>
      <Navbar NamePage="ข้อมูลนิสิต" />
      <ContainerCustom>
        {testStudentDetail.map((detail) => (
          <DetailCard
            genderThai={detail.genderThai}
            genderEng={detail.genderEng}
            Thainame={detail.Thainame}
            Engname={detail.Engname}
            id={detail.id}
            faculty={detail.faculty}
            department={detail.department}
            idDepartment={detail.idDepartment}
          />
        ))}
        <TextBox>รายวิชาที่นิสิตลงทะเบียน</TextBox>
        <EnrollCard NameGroup="พลเมืองไทยและพลเมืองโลก" NumPattern={1} />
        <EnrollCard NameGroup="ภาษาและการสื่อสาร" NumPattern={1} />
        <EnrollCard NameGroup="ศาสตร์แห่งผู้ประกอบการ" NumPattern={1} />
        <EnrollCard NameGroup="สุนทรียศาสตร์" NumPattern={1} />
        <EnrollCard NameGroup="อยู่ดีมีสุข" NumPattern={1} />
        <EnrollCard NameGroup="เสรี" NumPattern={1} />
        <div style={{ marginBottom: "60px" }}></div>
      </ContainerCustom>
    </div>
  );
};

export default DetailPage;
