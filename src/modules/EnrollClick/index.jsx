import React from "react";
import { Bigbox, BigboxSearch } from "./styled";
import { Col, Row } from "react-bootstrap";
import testdata from "../../testdata.json";

const EnrollClick = (props) => {
  const { NameGroup, NumPattern } = props;
  const testStudentSubject = testdata.SubjectDetail;

  const Subject = (subjectShow) => {
    return (
      <div>
        <Row style={{ fontSize: "20px" }}>
          <Col xs={3}>
            <div style={{ color: "#02BC77" }}>{subjectShow.id}</div>
          </Col>
          <Col xs={5}>
            <div>{subjectShow.Thainame}</div>
          </Col>
          <Col xs={4} style={{ textAlign: "right" }}>
            <div style={{ color: "#FD0404" }}>
              {subjectShow.credit} หน่วยกิต
            </div>
          </Col>
        </Row>
        <Row style={{ fontSize: "18px" }}>
          <Col md={{ span: 5, offset: 3 }}>
            <div>{subjectShow.Engname}</div>
          </Col>
          <Col xs={4} style={{ textAlign: "right" }}>
            <div>กลุ่ม{subjectShow.group}</div>
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <div>
      {testStudentSubject
        .filter((subject) => subject.group === NameGroup)
        .map((subjectShow) => (
          <div>
            {NumPattern ? (
              <Bigbox fluid>{Subject(subjectShow)}</Bigbox>
            ) : (
              <BigboxSearch fluid>{Subject(subjectShow)}</BigboxSearch>
            )}
          </div>
        ))}
    </div>
  );
};

export default EnrollClick;
