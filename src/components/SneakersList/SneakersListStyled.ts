import styled from "styled-components";

const SneakersListStyled = styled.ul`
  width: 100%;

  .sneaker {
    padding-bottom: 24px;
  }

  .no-sneakers {
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontSize.title};
    font-weight: ${(props) => props.theme.fontWeight.weight600};
  }
`;

export default SneakersListStyled;
