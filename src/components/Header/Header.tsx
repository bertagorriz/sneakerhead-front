import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        src="./img/logo.svg"
        alt="sneakerhead logo"
        width={272}
        height={19.77}
      />
    </HeaderStyled>
  );
};

export default Header;
