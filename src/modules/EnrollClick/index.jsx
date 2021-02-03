import React from "react";
import { Bigbox, BigboxSearch, RowHeadCustom, RowDetailCustom } from "./styled";
import { Col, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

const EnrollClick = (props) => {
  const { NumPattern, id, thainame, engname, group, credit } = props;
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const Subject = () => {
    return (
      <div>
        {isDesktop ? (
          <div>
            <RowHeadCustom>
              <Col xs={2}>
                <div style={{ color: "#02BC77" }}>{id}</div>
              </Col>
              <Col xs={6}>
                <div>{thainame}</div>
              </Col>
              <Col xs={4} style={{ textAlign: "right" }}>
                <div style={{ color: "#FD0404" }}>{credit} หน่วยกิต</div>
              </Col>
            </RowHeadCustom>
            <Row>
              <Col md={{ span: 6, offset: 2 }}>
                <div>{engname}</div>
              </Col>
              <Col xs={4} style={{ textAlign: "right" }}>
                <div>กลุ่มสาระ{group}</div>
              </Col>
            </Row>
          </div>
        ) : (
          <div>
            <RowHeadCustom>
              <Col xs={6}>
                <div style={{ color: "#02BC77" }}>{id}</div>
              </Col>
              <Col xs={6} style={{ textAlign: "right" }}>
                <div style={{ color: "#FD0404" }}>{credit} หน่วยกิต</div>
              </Col>
            </RowHeadCustom>
            <RowDetailCustom>{thainame}</RowDetailCustom>
            <RowDetailCustom>{engname}</RowDetailCustom>
            <RowDetailCustom>กลุ่มสาระ{group}</RowDetailCustom>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      {NumPattern ? (
        <Bigbox fluid>{Subject()}</Bigbox>
      ) : (
        <BigboxSearch fluid>{Subject()}</BigboxSearch>
      )}
    </div>
  );
};

export default EnrollClick;
