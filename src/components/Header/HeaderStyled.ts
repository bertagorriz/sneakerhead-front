import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 320px;
  padding: 23px 24px;
  background-color: ${(props) => props.theme.color.secondary};
  border-bottom: 0.8px solid ${(props) => props.theme.color.text};
`;

export default HeaderStyled;
