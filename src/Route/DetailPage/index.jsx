import React from "react";
import DetailCard from "../../modules/DetailCard";
import EnrollCard from "../../modules/EnrollCard";
import { TextBox, ContainerCustom } from "./styled";
import Exit from "../../images/exit.svg";
import { Navbar, ExitBotton } from "../Custom/styled";
import testdata from "../../testdata.json";

const DetailPage = () => {
  const testStudentDetail = testdata.DataDetail;
  return (
    <div>
      <Navbar className="justify-content-center">
        <div style={{ margin: "auto", color: "white" }}>ข้อมูลนิสิต</div>
        <ExitBotton src={Exit} alt="Exit" />
      </Navbar>
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
        <EnrollCard NameGroup="พลเมืองไทยและพลเมืองโลก" />
        <EnrollCard NameGroup="ภาษาและการสื่อสาร" />
        <EnrollCard NameGroup="ศาสตร์แห่งผู้ประกอบการ" />
        <EnrollCard NameGroup="สุนทรียศาสตร์" />
        <EnrollCard NameGroup="อยู่ดีมีสุข" />
        <EnrollCard NameGroup="เสรี" />
        <div style={{marginBottom: "60px"}}></div>
      </ContainerCustom>
    </div>
  );
};

export default DetailPage;
