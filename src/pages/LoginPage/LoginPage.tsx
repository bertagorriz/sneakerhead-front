import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  return (
    <LoginPageStyled>
      <h1 className="title">
        Login to access <span>to sneakers world</span>
      </h1>
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
