import styled from "styled-components";

const NavbarStyled = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: ${(props) => props.theme.color.secondary};
  border-top: 0.8px solid ${(props) => props.theme.color.text};

  .navbar-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 24px;
    height: 100%;
  }

  .active > svg {
    border: 2px solid ${(props) => props.theme.color.text};
  }
`;

export default NavbarStyled;
