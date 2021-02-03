import React from "react";
import { FormCustom } from "./styled";
import { Form } from "react-bootstrap";

const RenderGroup = () => {
  return (
    <Form.Group>
      <FormCustom as="select">
        <option>กลุ่มสาระพลเมืองไทยและพลเมืองโลก</option>
        <option>กลุ่มสาระภาษาและการสื่อสาร</option>
        <option>กลุ่มสาระศาสตร์แห่งผู้ประกอบการ</option>
        <option>กลุ่มสาระสุนทรีศาสตร์</option>
        <option>กลุ่มสาระอยู่ดีมีสุข</option>
      </FormCustom>
    </Form.Group>
  );
};

export default RenderGroup;
