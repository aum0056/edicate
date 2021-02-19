import React from "react";
import Spinner from "react-loader-spinner";
import { CenterBox, BoxContain } from "./styled";

const SkeletonSearchPage = () => {
  return (
    <CenterBox>
      <BoxContain>
        <Spinner type="TailSpin" color="#02BC77" height={120} width={120} />
      </BoxContain>
      <div style={{ marginTop: "30px" }}>กรุณารอสักครู่</div>
    </CenterBox>
  );
};

export default SkeletonSearchPage;
