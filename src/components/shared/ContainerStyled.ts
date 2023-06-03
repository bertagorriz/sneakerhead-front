import styled from "styled-components";

const ContainerStyled = styled.div`
  margin: 0 auto;
  padding: 0 24px;
  min-width: 320px;
  height: 100vh;
  background-color: ${(props) => props.theme.color.secondary};
`;

export default ContainerStyled;
