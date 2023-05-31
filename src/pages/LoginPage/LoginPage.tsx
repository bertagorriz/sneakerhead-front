import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  return (
    <LoginPageStyled>
      <h1 className="title">
        Login to access <span>to sneakers world</span>
      </h1>
    </LoginPageStyled>
  );
};

export default LoginPage;
