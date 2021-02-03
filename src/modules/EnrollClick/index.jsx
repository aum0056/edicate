import React, {useEffect, useState} from "react";
import { Bigbox, BigboxSearch, RowHeadCustom, RowDetailCustom } from "./styled";
import { Col, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import axios from "axios";

const EnrollClick = (props) => {
  const { NameGroup, NumPattern } = props;
  const [subjectDetail, setSubjectDetail] = useState([])
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  useEffect(() => {
    axios({
      method: "POST",
      url: "http://localhost:8000/detail",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("x-access-token")}`,
      },
    }).then((res) => {
      setSubjectDetail(res.data.subject);
    });
  }, []);

  const Subject = (subjectDetail) => {
    return (
      <div>
        {isDesktop ? (
          <div>
            <RowHeadCustom>
              <Col xs={2}>
                <div style={{ color: "#02BC77" }}>{subjectDetail.id}</div>
              </Col>
              <Col xs={6}>
                <div>{subjectDetail.thainame}</div>
              </Col>
              <Col xs={4} style={{ textAlign: "right" }}>
                <div style={{ color: "#FD0404" }}>
                  {subjectDetail.credit} หน่วยกิต
                </div>
              </Col>
            </RowHeadCustom>
            <Row>
              <Col md={{ span: 6, offset: 2 }}>
                <div>{subjectDetail.engname}</div>
              </Col>
              <Col xs={4} style={{ textAlign: "right" }}>
                <div>กลุ่ม{subjectDetail.group}</div>
              </Col>
            </Row>
          </div>
        ) : (
          <div>
            <RowHeadCustom>
              <Col xs={6}>
                <div style={{ color: "#02BC77" }}>{subjectDetail.id}</div>
              </Col>
              <Col xs={6} style={{ textAlign: "right" }}>
                <div style={{ color: "#FD0404" }}>
                  {subjectDetail.credit} หน่วยกิต
                </div>
              </Col>
            </RowHeadCustom>
            <RowDetailCustom>{subjectDetail.thainame}</RowDetailCustom>
            <RowDetailCustom>{subjectDetail.engname}</RowDetailCustom>
            <RowDetailCustom>กลุ่ม{subjectDetail.group}</RowDetailCustom>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      {subjectDetail
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
