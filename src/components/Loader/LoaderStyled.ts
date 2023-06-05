import styled from "styled-components";

const LoaderStyled = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.secondary}d8;
  z-index: 1;
  width: 100vw;
  height: 100vh;

  .loader {
    width: 90px;
    height: 90px;
    border: 8px solid ${(props) => props.theme.color.primary};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoaderStyled;
