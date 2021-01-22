import React from "react";
import { Row, Col } from "react-bootstrap";
import Detail from "../../images/detail.svg";
import eduDetail from "../../images/eduDetail.svg";
import { CustomButton, MidContainer, FontBox, HoverImg } from "./styled";
import { useHistory } from "react-router-dom";
import Navbar from "../../modules/Navbar";
import { useMediaQuery } from "react-responsive";

const Custom = () => {
  const history = useHistory();
  const OnClickDetail = () => {
    history.push({ pathname: "/Detail" });
  };
  const OnClickSubject = () => {
    history.push({ pathname: "/Subject" });
  };
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 768px)",
  });
  return (
    <div>
      <Navbar NamePage="ระบบจัดการวิชาบูรณาการ" />
      <MidContainer>
        {isDesktop ? (
          <Row className="justify-content-md-center">
            <CustomButton onClick={OnClickDetail} variant="outline-secondary">
              <img src={Detail} alt="Detail" />
              <FontBox>ตรวจสอบข้อมูลนิสิต</FontBox>
            </CustomButton>
            <Col md={1} />
            <CustomButton onClick={OnClickSubject} variant="outline-secondary">
              <HoverImg src={eduDetail} alt="eduDetail" />
              <FontBox>ข้อมูลรายวิชา</FontBox>
            </CustomButton>
          </Row>
        ) : (
          <div>
            <Row className="justify-content-md-center">
              <CustomButton onClick={OnClickDetail} variant="outline-secondary">
                <FontBox>ตรวจสอบข้อมูลนิสิต</FontBox>
              </CustomButton>
            </Row>
            <Row className="justify-content-md-center">
              <CustomButton
                onClick={OnClickSubject}
                variant="outline-secondary"
              >
                <FontBox>ข้อมูลรายวิชา</FontBox>
              </CustomButton>
            </Row>
          </div>
        )}
      </MidContainer>
    </div>
  );
};

export default Custom;
