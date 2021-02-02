import React from "react";
import { Bigbox, BigboxSearch, RowHeadCustom, RowDetailCustom } from "./styled";
import { Col, Row } from "react-bootstrap";
import testdata from "../../testdata.json";
import { useMediaQuery } from "react-responsive";

const EnrollClick = (props) => {
  const { NameGroup, NumPattern } = props;
  const testStudentSubject = testdata.SubjectDetail;
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const Subject = (subjectShow) => {
    return (
      <div>
        {isDesktop ? (
          <div>
            <RowHeadCustom>
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
            </RowHeadCustom>
            <Row>
              <Col md={{ span: 5, offset: 3 }}>
                <div>{subjectShow.Engname}</div>
              </Col>
              <Col xs={4} style={{ textAlign: "right" }}>
                <div>กลุ่ม{subjectShow.group}</div>
              </Col>
            </Row>
          </div>
        ) : (
          <div>
            <RowHeadCustom>
              <Col xs={6}>
                <div style={{ color: "#02BC77" }}>{subjectShow.id}</div>
              </Col>
              <Col xs={6} style={{ textAlign: "right" }}>
                <div style={{ color: "#FD0404" }}>
                  {subjectShow.credit} หน่วยกิต
                </div>
              </Col>
            </RowHeadCustom>
            <RowDetailCustom>{subjectShow.Thainame}</RowDetailCustom>
            <RowDetailCustom>{subjectShow.Engname}</RowDetailCustom>
            <RowDetailCustom>กลุ่ม{subjectShow.group}</RowDetailCustom>
          </div>
        )}
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
