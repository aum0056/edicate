import styled from "styled-components";

export const EnrollBox = styled.div`
  font-size: 20px;
  @media (max-width: 560px) {
    font-size: 3.57vw;
  }
  @media (max-width: 413px) {
    font-size: 14px;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  height: 60px;
  border-radius: 0.25rem;
  border: 0.5px solid #c4c4c4;
  margin-top: 20px;
  cursor: pointer;
`;

export const DropdownCustom = styled.img`
  margin: 5px 0 0 20px;
  width: 20px;
  height: 20px;
  @media (max-width: 560px) {
    width: 3.57vw;
    height: 3.57vw;
    margin: 0.89vw 0 0 20px;
  }
  @media (max-width: 413px) {
    width: 14px;
    height: 14px;
    margin: 3.6px 0 0 20px;
  }
`;

export const EnrollBox2 = styled(EnrollBox)`
  border-bottom-left-radius: 0rem;
  border-bottom-right-radius: 0rem;
`;

export const CondiBox = styled.div`
  display: flex;
`;

export const DropdownClick = styled(DropdownCustom)`
  transform: rotate(180deg);
`;
