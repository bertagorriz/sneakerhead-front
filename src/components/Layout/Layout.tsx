import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

const Layout = (): React.ReactElement => {
  return (
    <>
      <Header />
      <ContainerStyled>
        <Outlet />
      </ContainerStyled>
      <Navbar />
    </>
  );
};

export default Layout;
