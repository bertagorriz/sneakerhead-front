import styled from "styled-components";

const ContainerStyled = styled.div`
  margin: 0 auto;
  padding: 24px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.color.secondary};
`;

export default ContainerStyled;
