import React from "react";
import { Bigbox } from "./styled";
import { Col, Row } from "react-bootstrap";
import testdata from "../../testdata.json";

const EnrollClick = (props) => {
  const { NameGroup } = props;
  const testStudentSubject = testdata.SubjectDetail;

  return (
    <div>
      {testStudentSubject
        .filter((subject) => subject.group === NameGroup)
        .map((subjectShow) => (
          <Bigbox fluid>
            <Row style={{ fontSize: "24px" }}>
              <Col xs={3}>
                <div style={{ color: "#02BC77" }}>{subjectShow.id}</div>
              </Col>
              <Col xs={5}>
                <div>{subjectShow.Thainame}</div>
              </Col>
              <Col xs={4} style={{ textAlign: "right" }}>
                <div style={{ color: "#FD0404" }}>{subjectShow.credit} หน่วยกิต</div>
              </Col>
            </Row>
            <Row style={{ fontSize: "20px" }}>
              <Col md={{ span: 5, offset: 3 }}>
                <div>{subjectShow.Engname}</div>
              </Col>
              <Col xs={4} style={{ textAlign: "right" }}>
                <div>กลุ่ม{subjectShow.group}</div>
              </Col>
            </Row>
          </Bigbox>
        ))}
    </div>
  );
};

export default EnrollClick;
