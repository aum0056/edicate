import React from "react";
import Skeleton from "react-loading-skeleton";
import { SkeletonEnrollBox } from "./styled";

const SkeletonEnrollBoxs = () => {
  return (
    <SkeletonEnrollBox>
      <Skeleton count={1} width={150} />
      <Skeleton count={1} />
    </SkeletonEnrollBox>
  );
};

export default SkeletonEnrollBoxs;
