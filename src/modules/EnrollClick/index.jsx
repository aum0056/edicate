import React from "react";
import { Bigbox } from "./styled";
import { Col, Row } from "react-bootstrap";

const EnrollClick = () => {
  return (
    <Bigbox fluid>
      <Row style={{ fontSize: "24px" }}>
        <Col xs={3}>
          <div style={{ color: "#02BC77" }}>01459101-60</div>
        </Col>
        <Col xs={5}>
          <div>จิตวิทยาเพื่อชีวิตสมัยใหม่</div>
        </Col>
        <Col xs={4} style={{ textAlign: "right" }}>
          <div style={{ color: "#FD0404" }}>3 หน่วยกิต</div>
        </Col>
      </Row>
      <Row style={{ fontSize: "20px" }}>
        <Col md={{ span: 5, offset: 3 }}>
          <div>Psychology for Modern Life</div>
        </Col>
        <Col xs={4} style={{ textAlign: "right" }}>
          <div>กลุ่มอยู่ดีมีสุข</div>
        </Col>
      </Row>
    </Bigbox>
  );
};

export default EnrollClick;
