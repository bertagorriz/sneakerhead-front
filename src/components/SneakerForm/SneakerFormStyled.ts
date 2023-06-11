import styled from "styled-components";

const SneakerFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 1rem;

  .form {
    font-family: ${(props) => props.theme.fonts.fontFamily};

    &__select {
      padding: 18px;
      width: 100%;
      border-color: ${(props) => props.theme.color.text};
      border-style: solid;
      border-width: 0.8px;
      font-family: ${(props) => props.theme.fonts.fontFamily};
      font-size: 1rem;
      margin-bottom: 20px;
      background-color: ${(props) => props.theme.color.none};
    }

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
      margin-bottom: 20px;
    }

    &__textarea {
      padding: 18px;
      width: 100%;
      border-color: ${(props) => props.theme.color.text};
      border-style: solid;
      border-width: 0.8px;
      font-family: ${(props) => props.theme.fonts.fontFamily};
      font-size: 1rem;
      margin-bottom: 20px;
    }

    &__checkbox-container {
      display: flex;
      align-items: center;
      padding: 16px;
      gap: 10px;
      border-color: ${(props) => props.theme.color.text};
      border-style: solid;
      border-width: 0.8px;
      background-color: ${(props) => props.theme.color.none};

      &__last {
        display: flex;
        align-items: center;
        padding: 16px;
        gap: 10px;
        border-color: ${(props) => props.theme.color.text};
        border-style: solid;
        border-width: 0.8px;
        background-color: ${(props) => props.theme.color.none};
        margin-bottom: 20px;
      }
    }

    &__checkbox {
      width: 24px;
      height: 24px;
    }

    &__checkbox-label {
      text-transform: uppercase;
    }

    &__button {
      padding: 19px;
      margin-top: 40px;
      margin-bottom: 16px;
      background-color: ${(props) => props.theme.color.primary};
      width: 100%;
      border-radius: 35px;
      border: 0.8px solid ${(props) => props.theme.color.text};
      text-transform: uppercase;
      font-weight: ${(props) => props.theme.fontWeight.weight600};
      :disabled {
        color: ${(props) => props.theme.color.text};
        background-color: ${(props) => props.theme.color.none};
      }
    }
  }
`;

export default SneakerFormStyled;
