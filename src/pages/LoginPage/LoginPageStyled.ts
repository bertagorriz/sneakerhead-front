import styled from "styled-components";

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  padding-top: 24px;

  .title {
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-size: 1rem;
    font-weight: ${(props) => props.theme.fontWeight.weight400};
  }
`;

export default LoginPageStyled;
