import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";

const Navbar = (): React.ReactElement => {
  return (
    <NavbarStyled>
      <ul className="navbar-list">
        <li>
          <NavLink
            className="navbar-list__icon"
            to={"/add-sneaker"}
            aria-label="add-sneaker"
          >
            <img src="./img/add.svg" alt="add icon" width={48} height={48} />
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-list__icon" to={"/home"} aria-label="home">
            <img src="./img/home.svg" alt="home icon" width={48} height={48} />
          </NavLink>
        </li>
        <li>
          <button className="navbar-list__icon" aria-label="logout">
            <img
              src="./img/logout.svg"
              alt="logout icon"
              width={48}
              height={48}
            />
          </button>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
