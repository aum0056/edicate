import styled from "styled-components";

export const DetailBox = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
  @media (max-width: 767px) {
    text-align: center;
  }
  align-items: center;
  border-radius: 0.25rem;
  border: 0.5px solid #c4c4c4;
  box-shadow: 3px 5px 5px #c4c4c4, 5px 5px 10px #ebebeb;
  margin: 60px 0 40px 0;
  height: fit-content;
  padding: 20px;
`;
export const Picbox = styled.img`
  @media (min-width: 768px) {
    padding-right: 24px;
  }
  @media (min-width: 992px) {
    width: 85px;
    height: 85px;
  }
  @media (max-width: 991px) {
    width: 100px;
    height: 100px;
  }
`;

export const TextBox = styled.div`
  @media (min-width: 992px) {
    display: flex;
  }
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  @media (max-width: 560px) {
    font-size: 3.57vw;
  }
  @media (max-width: 413px) {
    font-size: 14px;
  }
  font-size: 20px;
`;
