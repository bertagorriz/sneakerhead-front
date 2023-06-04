import styled from "styled-components";

const SneakerCardStyled = styled.article`
  position: relative;
  border: 0.8px solid ${(props) => props.theme.color.text};

  .card {
    &__image {
      min-width: 100%;
      min-height: 100%;
      object-fit: cover;
      border-bottom: 0.8px solid ${(props) => props.theme.color.text};
    }

    &__text {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 5px 8px 8px 8px;

      &__name {
        font-size: ${(props) => props.theme.fontSize.title};
      }

      &__brand {
        font-size: ${(props) => props.theme.fontSize.subtitle};
      }
    }
  }

  .button {
    &__edit {
      position: absolute;
      top: 8px;
      left: 8px;
      background-color: transparent;
    }

    &__delete {
      position: absolute;
      top: 8px;
      right: 8px;
      background-color: transparent;
    }
  }
`;

export default SneakerCardStyled;
