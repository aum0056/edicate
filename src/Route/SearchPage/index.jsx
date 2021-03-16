import React, { useState, useEffect } from "react";
import ChooseButton from "../../modules/ChooseButton";
import Navbar from "../../modules/Navbar";
import SearchDetail from "../../modules/SearchDetail";
import GroupDetail from "../../modules/GroupDetail";
import { ContainerCustom } from "./styled";
import SkeletonSearchPage from "../../modules/SkeletonSearchPage";
import { GetDetailGened } from "../../utills/api";

const SearchPage = () => {
  const [tabState, setTabState] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [keepBigData, setKeepBigData] = useState({
    detailData: null,
  });

  useEffect(() => {
    GetDetailGened((detailBigData, courseBigData) => {
      setKeepBigData({
        detailData: detailBigData.data,
      });
      setIsLoading(false);
    });
  }, []);

  const collectId = () => {
    if (!isLoading) {
      const keep = keepBigData.detailData.subject.map((data) => data.id);
      return keep;
    }
  };

  return (
    <div>
      <Navbar NamePage="รายวิชาบูรณาการ" />
      {isLoading ? (
        <SkeletonSearchPage />
      ) : (
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
          <div>
            {tabState === 1 ? (
              <SearchDetail
                groupData={keepBigData.detailData.genedcourse}
                groupStudyId={collectId()}
              />
            ) : (
              <GroupDetail
                groupData={keepBigData.detailData.genedcourse}
                groupStudyId={collectId()}
              />
            )}
          </div>
        </ContainerCustom>
      )}
    </div>
  );
};

export default SearchPage;
