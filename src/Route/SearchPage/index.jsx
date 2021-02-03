import React, { useState } from "react";
import ChooseButton from "../../modules/ChooseButton";
import Navbar from "../../modules/Navbar";
import SearchDetail from "../../modules/SearchDetail";
import GroupDetail from "../../modules/GroupDetail";
import { ContainerCustom } from "./styled";

const SearchPage = () => {
  const [tabState, setTabState] = useState(1);
  
  return (
    <div>
      <Navbar NamePage="รายวิชาบูรณาการ" />
      <ContainerCustom>
        <div style={{ display: "flex" }}>
          <ChooseButton
            chooseName="รายวิชา"
            click={tabState === 1}
            onClick={setTabState}
            tabId={1}
          />
          <ChooseButton
            chooseName="หมวดหมู่"
            click={tabState === 2}
            onClick={setTabState}
            tabId={2}
          />
        </div>
        <div>{tabState === 1 ? <SearchDetail /> : <GroupDetail />}</div>
      </ContainerCustom>
    </div>
  );
};

export default SearchPage;
