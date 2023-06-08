import styled from "styled-components";

const ModalStyled = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.secondary}d8;
  z-index: 1;
  width: 100vw;
  height: 100vh;

  .modal {
    display: flex;
    justify-content: center;
    align-items: end;
    position: relative;
    padding: 1rem;
    width: 272px;
    height: 170px;

    &__close {
      background-color: transparent;
      position: absolute;
      margin: 1rem;
      top: 0;
      right: 0;
    }

    &--correct {
      background-color: ${(props) => props.theme.color.goodFeedback};
    }

    &--wrong {
      background-color: ${(props) => props.theme.color.wrongFeedback};
    }

    &__text {
      font-size: ${(props) => props.theme.fontSize.title};
      font-weight: ${(props) => props.theme.fontWeight.weight600};
    }
  }
`;

export default ModalStyled;
