import React from "react";
import { DetailBox, Picbox, TextBox } from "./styled";
import profile from "../../images/profile.svg";

const DetailCard = (props) => {
  const {genderThai, genderEng, Thainame, Engname, id, faculty, department, idDepartment} = props
  return (
    <DetailBox>
      <div>
        <Picbox src={profile} alt="profile" />
      </div>
      <TextBox>
        <div>
          <div>{genderThai}{Thainame}</div>
          <div>{genderEng}. {Engname}</div>
        </div>
        <div style={{textAlign: 'right'}}>
          <div>{id}</div>
          <div>คณะ{faculty} สาขาวิศวกรรม{department} ({idDepartment})</div>
        </div>
      </TextBox>
    </DetailBox>
  );
};

export default DetailCard;
