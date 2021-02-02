import React from "react";
import { DetailBox, TextBox } from "../DetailCard/styled";
import { useMediaQuery } from "react-responsive";
import Skeleton from "react-loading-skeleton";
import { Picbox, TextBoxS } from "./styled";

const SkeletonDetail = () => {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 992px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  return (
    <DetailBox>
      <Picbox>
        <Skeleton circle={true} height={90} width={90} />
      </Picbox>
      {isDesktop ? (
        <TextBoxS>
          <Skeleton count={4} />
        </TextBoxS>
      ) : (
        <TextBox>
          {isLaptop ? <Skeleton count={4} /> : <Skeleton count={5} />}
        </TextBox>
      )}
    </DetailBox>
  );
};

export default SkeletonDetail;
