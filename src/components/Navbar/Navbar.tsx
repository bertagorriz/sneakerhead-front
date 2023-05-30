import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";
import paths from "../../routers/paths/paths";

const Navbar = (): React.ReactElement => {
  return (
    <NavbarStyled>
      <ul className="navbar-list">
        <li>
          <NavLink
            className="navbar-list__icon"
            to={paths.login}
            aria-label="add-sneaker"
          >
            <img src="./img/add.svg" alt="add icon" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navbar-list__icon"
            to={paths.home}
            aria-label="home"
          >
            <img src="./img/home.svg" alt="home icon" />
          </NavLink>
        </li>
        <li>
          <button className="navbar-list__icon" aria-label="logout">
            <img src="./img/logout.svg" alt="logout icon" />
          </button>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
