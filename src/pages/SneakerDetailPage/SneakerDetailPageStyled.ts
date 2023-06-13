import styled from "styled-components";

const SneakerDetailPageStyled = styled.div`
  padding-bottom: 24px;
  .details-title {
    display: flex;
    align-items: center;
    padding-left: 8px;
    margin-top: 24px;
    margin-bottom: 32px;
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontSize.title};
    font-weight: 600;
    background-color: ${(props) => props.theme.color.primary};
    border: 0.8px solid ${(props) => props.theme.color.text};
    height: 40px;
  }

  .card {
    position: relative;
    border: 0.8px solid ${(props) => props.theme.color.text};

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
        font-weight: ${(props) => props.theme.fontWeight.weight600};
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

  .info-container {
    margin-top: 16px;
    border: 0.8px solid ${(props) => props.theme.color.text};
  }

  .info {
    border-bottom: 0.8px solid ${(props) => props.theme.color.text};
    padding: 10px 8px;

    &__title {
      font-size: ${(props) => props.theme.fontSize.body};
    }

    &__value {
      font-weight: ${(props) => props.theme.fontWeight.weight600};
      padding-left: 8px;

      &__list {
        padding: 8px 10px 0px;
      }
    }
  }

  .availability {
    border: 0.8px solid ${(props) => props.theme.color.text};
    text-transform: uppercase;
    margin-top: 16px;
    padding: 8px 12px 8px 12px;
    font-size: ${(props) => props.theme.fontSize.body};
    font-weight: ${(props) => props.theme.fontWeight.weight600};
  }
`;

export default SneakerDetailPageStyled;
