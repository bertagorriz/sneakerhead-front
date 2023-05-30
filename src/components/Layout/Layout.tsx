import { Outlet } from "react-router-dom";
import ContainerStyled from "../shared/ContainerStyled";
import Navbar from "../Navbar/Navbar";

const Layout = (): React.ReactElement => {
  return (
    <>
      <ContainerStyled>
        <Outlet />
      </ContainerStyled>
      <Navbar />
    </>
  );
};

export default Layout;
