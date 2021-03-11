import React from "react";
import { DetailBox, Picbox, TextBox } from "./styled";
import { useMediaQuery } from "react-responsive";

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
    pic
  } = props;

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 992px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  return (
    <DetailBox>
      <div>
        <Picbox src={pic} alt="profile" />
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
        {isDesktop ? (
          <div style={{ textAlign: "right" }}>
            <div>{id}</div>
            <div>
              {faculty ? "คณะ" + faculty : null}{" "}
              {department ? "สาขา" + department : null}{" "}
              {idDepartment ? "(" + idDepartment + ")" : null}
            </div>
          </div>
        ) : (
          <div>
            <div>{id}</div>
            {isLaptop ? (
              <div>
                {faculty ? "คณะ" + faculty : null}{" "}
                {department ? "สาขา" + department : null}{" "}
                {idDepartment ? "(" + idDepartment + ")" : null}
              </div>
            ) : (
              <div>
                <div>{faculty ? "คณะ" + faculty : null}</div>
                <div>
                  {department ? "สาขา" + department : null}{" "}
                  {idDepartment ? "(" + idDepartment + ")" : null}
                </div>
              </div>
            )}
          </div>
        )}
      </TextBox>
    </DetailBox>
  );
};

export default DetailCard;
