import { NavLink, useNavigate } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";
import paths from "../../routers/paths/paths";
import { useAppDispatch, useAppSelector } from "../../store";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { logoutUserActionCreator } from "../../store/user/userSlice";

const Navbar = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { removeToken } = useLocalStorage();
  const Navigate = useNavigate();
  const userState = useAppSelector((store) => store.user);

  const logout = () => {
    dispatch(logoutUserActionCreator(userState));

    removeToken("token");

    Navigate(paths.login);
  };

  return (
    <NavbarStyled>
      <ul className="navbar-list">
        <li>
          <NavLink to={paths.addSneaker} aria-label="add-sneaker">
            <svg
              className="navbar-list__icon"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.4"
                y="0.4"
                width="47.2"
                height="47.2"
                fill="#FFC700"
                stroke="black"
                strokeWidth="0.8"
              />
              <path
                d="M21.9961 8H24.6705C24.9082 8 25.0271 8.1179 25.0271 8.3537V39.4796C25.0271 39.7154 24.9082 39.8333 24.6705 39.8333H21.9961C21.7583 39.8333 21.6395 39.7154 21.6395 39.4796V8.3537C21.6395 8.1179 21.7583 8 21.9961 8Z"
                fill="black"
              />
              <path
                d="M8.35659 22.2367H38.3101C38.5478 22.2367 38.6667 22.3546 38.6667 22.5904V25.2432C38.6667 25.479 38.5478 25.5969 38.3101 25.5969H8.35659C8.11886 25.5969 8 25.479 8 25.2432V22.5904C8 22.3546 8.11886 22.2367 8.35659 22.2367Z"
                fill="black"
              />
            </svg>
          </NavLink>
        </li>
        <li>
          <NavLink to={paths.home} aria-label="home">
            <svg
              className="navbar-list__icon"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.4"
                y="0.4"
                width="47.2"
                height="47.2"
                fill="#FFC700"
                stroke="black"
                strokeWidth="0.8"
              />
              <path
                d="M39.3087 23.7431L25.1019 9.30999L24.1496 8.34205C23.9326 8.12296 23.6392 8 23.3334 8C23.0275 8 22.7341 8.12296 22.5171 8.34205L7.358 23.7431C7.13567 23.9682 6.95997 24.2363 6.84125 24.5316C6.72253 24.8268 6.6632 25.1433 6.66678 25.4622C6.68149 26.7777 7.75876 27.8279 9.05297 27.8279H10.6156V40H36.0511V27.8279H37.6468C38.2756 27.8279 38.8675 27.5775 39.3124 27.1253C39.5314 26.9033 39.705 26.6394 39.823 26.3488C39.9411 26.0582 40.0012 25.7467 39.9999 25.4323C39.9999 24.797 39.7536 24.1953 39.3087 23.7431ZM25.3923 37.3092H21.2744V29.6853H25.3923V37.3092ZM33.4039 25.1371V37.3092H27.7454V28.7884C27.7454 27.9624 27.0873 27.2935 26.2747 27.2935H20.392C19.5794 27.2935 18.9213 27.9624 18.9213 28.7884V37.3092H13.2628V25.1371H9.73316L23.337 11.3206L24.1864 12.1839L36.9372 25.1371H33.4039Z"
                fill="black"
              />
            </svg>
          </NavLink>
        </li>
        <li>
          <button onClick={logout} aria-label="logout">
            <svg
              className="navbar-list__icon"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.4"
                y="0.4"
                width="47.2"
                height="47.2"
                fill="#FFC700"
                stroke="black"
                strokeWidth="0.8"
              />
              <path
                d="M39.1132 34.225H36.9116C36.7397 34.225 36.5965 34.3708 36.5965 34.5458V37.1208H10.8277V10.8792H36.6006V13.4542C36.6006 13.6292 36.7438 13.775 36.9157 13.775H39.1173C39.2892 13.775 39.4324 13.6333 39.4324 13.4542V9.27917C39.4324 8.57083 38.8718 8 38.1761 8H9.25631C8.56064 8 8 8.57083 8 9.27917V38.7208C8 39.4292 8.56064 40 9.25631 40H38.172C38.8677 40 39.4283 39.4292 39.4283 38.7208V34.5458C39.4283 34.3667 39.2851 34.225 39.1132 34.225ZM39.8744 23.7375L34.0675 19.0708C33.8506 18.8958 33.5355 19.0542 33.5355 19.3333V22.5H20.6859C20.5059 22.5 20.3585 22.65 20.3585 22.8333V25.1667C20.3585 25.35 20.5059 25.5 20.6859 25.5H33.5355V28.6667C33.5355 28.9458 33.8547 29.1042 34.0675 28.9292L39.8744 24.2625C39.9135 24.2313 39.9452 24.1915 39.9669 24.146C39.9887 24.1005 40 24.0506 40 24C40 23.9494 39.9887 23.8995 39.9669 23.854C39.9452 23.8085 39.9135 23.7687 39.8744 23.7375Z"
                fill="black"
              />
            </svg>
          </button>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
