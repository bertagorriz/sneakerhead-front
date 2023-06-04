import styled from "styled-components";

const SneakerCardStyled = styled.article`
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
      padding: 8px;

      &__name {
        font-size: ${(props) => props.theme.fontSize.title};
      }

      &__brand {
        font-size: ${(props) => props.theme.fontSize.subtitle};
      }
    }
  }
`;

export default SneakerCardStyled;
