import styled from "styled-components";

const NavbarStyled = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: ${(props) => props.theme.color.secondary};

  li {
    display: flex;
  }

  .navbar-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 320px;
    padding: 8px 24px;
    border-top: 0.8px solid ${(props) => props.theme.color.text};

    &__icon {
      height: 48px;
      width: 48px;
      background-color: ${(props) => props.theme.color.secondary};
    }
  }
`;

export default NavbarStyled;
