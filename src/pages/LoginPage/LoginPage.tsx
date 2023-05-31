import { useNavigate } from "react-router";
import useUser from "../../hooks/useUser/useUser";
import { UserCredentials } from "../../store/user/types";
import LoginPageStyled from "./LoginPageStyled";
import paths from "../../routers/paths/paths";
import LoginForm from "../../components/LoginForm/LoginForm";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";

const LoginPage = (): React.ReactElement => {
  const { setToken } = useLocalStorage();
  const { getUserToken } = useUser();
  const Navigate = useNavigate();

  const onSubmit = async (userCredentials: UserCredentials) => {
    const token = await getUserToken(userCredentials);
    setToken("token", token);
    Navigate(paths.home, { replace: true });

    return token;
  };

  return (
    <LoginPageStyled>
      <h1 className="title">
        Login to access <span>to sneakers world</span>
      </h1>
      <LoginForm handleOnSubmit={onSubmit} />
    </LoginPageStyled>
  );
};

export default LoginPage;
