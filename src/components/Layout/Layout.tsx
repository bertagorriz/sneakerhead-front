import { Outlet, useLocation } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import paths from "../../routers/paths/paths";
import { useAppSelector } from "../../store";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";

const Layout = (): React.ReactElement => {
  const location = useLocation();
  const { isLoading } = useAppSelector((store) => store.uiStore);
  const { message } = useAppSelector((store) => store.uiStore);

  return (
    <>
      {message && <Modal />}
      {isLoading && <Loader />}
      <Header />
      <ContainerStyled>
        <Outlet />
      </ContainerStyled>
      {location.pathname === paths.login || <Navbar />}
    </>
  );
};

export default Layout;
