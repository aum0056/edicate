import React from 'react';
import { Button, Row, Col, Container, Nav } from 'react-bootstrap';
import Detail from '../../images/detail.svg';
import eduDetail from '../../images/eduDetail.svg';
import Exit from '../../images/exit.svg';
import { Navbar, CustomButton, MidContainer, FontBox, ExitBotton } from "./styled";

const Custom = () => {
    return(
    <div>
        <Navbar className="justify-content-center">
            <div style={{margin: "auto", color: "white"}}>ระบบจัดการวิชาบูรณาการ</div>
            <ExitBotton src={Exit} alt='Exit'/>
        </Navbar>
        <MidContainer>
            <Row className="justify-content-md-center">
                <CustomButton variant="outline-secondary">
                    <img src={Detail} alt='Detail'/>
                    <FontBox>ตรวจสอบข้อมูลนิสิต</FontBox>
                </CustomButton>
                <Col md={1}></Col>
                <CustomButton variant="outline-secondary">
                    <img src={eduDetail} alt='eduDetail'/>
                    <FontBox>ข้อมูลรายวิชา</FontBox>
                </CustomButton>
            </Row>
        </MidContainer>
    </div>
)};

export default Custom;