import React from "react";
import { FormCustom } from "./styled";
import { Form } from "react-bootstrap";

const RenderGroup = () => {
  return (
    <Form.Group>
      <FormCustom as="select">
        <option>กลุ่มพลเมืองไทยและพลเมืองโลก</option>
        <option>กลุ่มภาษาและการสื่อสาร</option>
        <option>กลุ่มศาสตร์แห่งผู้ประกอบการ</option>
        <option>กลุ่มสุนทรีศาสตร์</option>
        <option>กลุ่มอยู่ดีมีสุข</option>
        <option>กลุ่มเสรี</option>
      </FormCustom>
    </Form.Group>
  );
};

export default RenderGroup;
