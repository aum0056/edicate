import React, { useState, useEffect } from "react";
import ChooseButton from "../../modules/ChooseButton";
import Navbar from "../../modules/Navbar";
import SearchDetail from "../../modules/SearchDetail";
import GroupDetail from "../../modules/GroupDetail";
import { ContainerCustom } from "./styled";
import axios from "axios";

const SearchPage = () => {
  const [tabState, setTabState] = useState(1);
  const [keepBigData, setKeepBigData] = useState({
    detailData: null,
    courseData: null,
  });

  useEffect(() => {
    const FetchData = async () => {
      const detailBigData = await axios({
        method: "POST",
        url: "http://localhost:8000/detail",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("x-access-token")}`,
        },
      });
      const courseBigData = await axios({
        method: "POST",
        url: "http://localhost:8000/genedcourse",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("x-access-token")}`,
        },
      });
      setKeepBigData({
        detailData: detailBigData.data.subject,
        courseData: courseBigData.data,
      });
    };
    FetchData();
  }, []);

  const collectId = () => {
    if (keepBigData.detailData !== null) {
      const keep = keepBigData.detailData.map((data) => data.id);
      return keep;
    }
  };

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
        <div>
          {tabState === 1 ? (
            <SearchDetail />
          ) : (
            <GroupDetail groupData={keepBigData.courseData} groupStudyId={collectId()} />
          )}
        </div>
      </ContainerCustom>
    </div>
  );
};

export default SearchPage;
