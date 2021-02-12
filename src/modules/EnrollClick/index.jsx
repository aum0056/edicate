import React from "react";
import {
  Bigbox,
  BigboxSearch,
  RowHeadCustom,
  RowDetailCustom,
  ColorTheme,
} from "./styled";
import { Col, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

const EnrollClick = (props) => {
  const {
    NumPattern,
    id,
    thainame,
    engname,
    group,
    credit,
    colorState,
    type,
  } = props;
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const RedTheme = {
    main: "#FD0404",
  };

  const GreenTheme = {
    main: "#02BC77",
  };

  const Subject = () => {
    return (
      <div>
        {isDesktop ? (
          <div>
            <RowHeadCustom>
              <Col xs={2}>
                <ColorTheme theme={GreenTheme}>{id}</ColorTheme>
              </Col>
              <Col xs={6}>
                <div>{thainame}</div>
              </Col>
              <Col xs={4} style={{ textAlign: "right" }}>
                <ColorTheme theme={RedTheme}>{credit} หน่วยกิต</ColorTheme>
              </Col>
            </RowHeadCustom>
            <Row>
              <Col md={{ span: 6, offset: 2 }}>
                <div>{engname}</div>
              </Col>
              <Col xs={4} style={{ textAlign: "right" }}>
                <div>
                  {type}
                  {group}
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          <div>
            <RowHeadCustom>
              <Col xs={6}>
                <ColorTheme theme={GreenTheme}>{id}</ColorTheme>
              </Col>
              <Col xs={6} style={{ textAlign: "right" }}>
                <ColorTheme theme={RedTheme}>{credit} หน่วยกิต</ColorTheme>
              </Col>
            </RowHeadCustom>
            <RowDetailCustom>{thainame}</RowDetailCustom>
            <RowDetailCustom>{engname}</RowDetailCustom>
            <RowDetailCustom>
              {type}
              {group}
            </RowDetailCustom>
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
        <div>
          {colorState ? (
            <div style={{ color: "#c4c4c4" }}>
              <BigboxSearch fluid>{Subject()}</BigboxSearch>
            </div>
          ) : (
          <BigboxSearch fluid>{Subject()}</BigboxSearch>
          )}
        </div>
      )}
    </div>
  );
};

export default EnrollClick;
