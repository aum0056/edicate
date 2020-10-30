import React from "react";
import { Row, Col } from "react-bootstrap";
import Detail from "../../images/detail.svg";
import eduDetail from "../../images/eduDetail.svg";
import { CustomButton, MidContainer, FontBox, HoverImg } from "./styled";
import { useHistory } from "react-router-dom";
import Navbar from "../../modules/Navbar";

const Custom = () => {
  const history = useHistory();
  const OnClickDetail = () => {
    history.push({ pathname: "/Detail" });
  };
  return (
    <div>
      <Navbar NamePage="ระบบจัดการวิชาบูรณาการ" />
      <MidContainer>
        <Row className="justify-content-md-center">
          <CustomButton onClick={OnClickDetail} variant="outline-secondary">
            <img src={Detail} alt="Detail" />
            <FontBox>ตรวจสอบข้อมูลนิสิต</FontBox>
          </CustomButton>
          <Col md={1} />
          <CustomButton variant="outline-secondary">
            <HoverImg src={eduDetail} alt="eduDetail" />
            <FontBox>ข้อมูลรายวิชา</FontBox>
          </CustomButton>
        </Row>
      </MidContainer>
    </div>
  );
};

export default Custom;
