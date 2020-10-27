import React from "react";
import { DetailBox, Picbox, TextBox } from "./styled";
import profile from "../../images/profile.svg";

const DetailCard = () => {
  return (
    <DetailBox>
      <div>
        <Picbox src={profile} alt="profile" />
      </div>
      <TextBox>
        <div>
          <div>นายจิตดี จิตอ่อนหวังอ่อน</div>
          <div>Mr. xxxxxxxx xxxxxxxxxxxxxxx</div>
        </div>
        <div style={{textAlign: 'right'}}>
          <div>601xxxxxxx</div>
          <div>คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์ (E09)</div>
        </div>
      </TextBox>
    </DetailBox>
  );
};

export default DetailCard;
