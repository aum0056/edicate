import styled from "styled-components";

export const DetailBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  border: 0.5px solid #c4c4c4;
  box-shadow: 3px 5px 5px #c4c4c4, 5px 5px 10px #ebebeb;
  margin: 60px 0 40px 0;
  height: fit-content;
  padding: 20px;
  font-size: 20px;
`;
export const Picbox = styled.img`
  padding-right: 24px;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  @media (max-width: 425px) {
    font-size: 14px;
  }
`;
