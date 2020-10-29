import { React, useState } from "react";
import DetailCard from "../../modules/DetailCard";
import EnrollCard from "../../modules/EnrollCard";
import EnrollClick from "../../modules/EnrollClick";
import { TextBox, ContainerCustom } from "./styled";
import Exit from "../../images/exit.svg";
import { Navbar, ExitBotton } from "../Custom/styled";

const DetailPage = () => {
  const [isClick, setIsClick] = useState(false);
  const onClickDropdown = () => {
    setIsClick(!isClick);
  };
  return (
    <div>
      <Navbar className="justify-content-center">
        <div style={{ margin: "auto", color: "white" }}>ข้อมูลนิสิต</div>
        <ExitBotton src={Exit} alt="Exit" />
      </Navbar>
      <ContainerCustom>
        <DetailCard />
        <TextBox style={{ fontSize: "24px" }}>รายวิชาที่นิสิตลงทะเบียน</TextBox>
        <div onClick={onClickDropdown}>
          <EnrollCard isClick={isClick} />
        </div>
        {isClick ? <EnrollClick /> : null}
      </ContainerCustom>
    </div>
  );
};

export default DetailPage;
