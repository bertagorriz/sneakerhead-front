import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 45px 0;
  gap: 20px;
  font-size: 1rem;

  .form {
    &__label {
      display: flex;
      align-items: center;
      padding-bottom: 8px;
      text-transform: uppercase;
    }

    &__input {
      padding: 18px;
      width: 100%;
      border-color: ${(props) => props.theme.color.text};
      border-style: solid;
      border-width: 0.8px;
      font-size: 1rem;
    }

    &__button {
      padding: 19px;
      background-color: ${(props) => props.theme.color.primary};
      width: 100%;
      border-radius: 35px;
      border: 0.8px solid ${(props) => props.theme.color.text};
      text-transform: uppercase;
      font-weight: ${(props) => props.theme.fontSizes.weight700};
    }
  }
`;

export default LoginFormStyled;
