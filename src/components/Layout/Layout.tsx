import { Outlet, useLocation } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

const Layout = (): React.ReactElement => {
  const location = useLocation();

  return (
    <>
      <Header />
      <ContainerStyled>
        <Outlet />
      </ContainerStyled>
      {location.pathname !== "/login" && <Navbar />}
    </>
  );
};

export default Layout;
