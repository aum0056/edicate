import styled from "styled-components";

export const TestCustom = styled.div`
  width: 200px;
  height: 100px;
  background: gray;
  margin-top: 10px;

  .fade-in {
    animation-name: fadeIn;
  }
  .fade-out {
    animation-name: fadeOut;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(0);
    }
    100% {
      opacity: 1;
      transform: translateY(200px);
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
      transform: translateY(200px);
    }
    100% {
      opacity: 0;
      transform: translateY(0);
    }
  }
`;
