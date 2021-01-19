import React from "react";
import { DetailBox, Picbox, TextBox } from "./styled";
import profile from "../../images/profile.svg";

const DetailCard = (props) => {
  const {
    genderThai,
    ThaiFirstname,
    ThaiLastname,
    EngFirstname,
    EngLastname,
    id,
    faculty,
    department,
    idDepartment,
  } = props;

  return (
    <DetailBox>
      <div>
        <Picbox src={profile} alt="profile" />
      </div>
      <TextBox>
        <div>
          <div>
            {genderThai}
            {ThaiFirstname} {ThaiLastname}
          </div>
          <div>
            {genderThai === "นาย" ? "Mr." : null}{" "}
            {genderThai === "นางสาว" ? "Miss" : null} {EngFirstname}{" "}
            {EngLastname}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div>{id}</div>
          <div>
            {faculty ? "คณะ" + faculty : null}{" "}
            {department ? "สาขา" + department : null}{" "}
            {idDepartment ? "(" + idDepartment + ")" : null}
          </div>
        </div>
      </TextBox>
    </DetailBox>
  );
};

export default DetailCard;
