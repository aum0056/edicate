import React from 'react';
import { Button, Row, Col, Container, Nav } from 'react-bootstrap';
import Detail from '../../images/detail.svg';
import eduDetail from '../../images/eduDetail.svg';
import Exit from '../../images/exit.svg';

const Test = () => {
    return(
    <div>
        <Nav className="justify-content-center" style={{fontSize: "30px", height: "80px", backgroundColor: "#02BC77"}}><div style={{margin: "auto", color: "white"}}>ระบบจัดการวิชาบูรณาการ</div><img src={Exit} alt='Exit' style={{position: "absolute", right: "30px", top: "26px"}}/></Nav>
    <Container style={{top: "50vh", transform: "translate(0, 25%)"}}>
        <Row className="justify-content-md-center">
            <Button variant="outline-secondary" style={{width: "350px", height: "400px"}}><img src={Detail} alt='Detail'/><div style={{fontSize: "32px", marginTop: "50px"}}>ตรวจสอบข้อมูลนิสิต</div></Button>
            <Col md={1}></Col>
            <Button variant="outline-secondary" style={{width: "350px", height: "400px"}}><img src={eduDetail} alt='eduDetail'/><div style={{fontSize: "32px", marginTop: "50px"}}>ข้อมูลรายวิชา</div></Button>
        </Row>
    </Container>
    </div>
)};

export default Test;