import { useNavigate } from "react-router";
import useUser from "../../hooks/useUser/useUser";
import { UserCredentials, UserTokenStructure } from "../../store/user/types";
import LoginPageStyled from "./LoginPageStyled";
import paths from "../../routers/paths/paths";
import LoginForm from "../../components/LoginForm/LoginForm";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import useToken from "../../hooks/useToken/useToken";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";

const LoginPage = (): React.ReactElement => {
  const { setToken } = useLocalStorage();
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();
  const dispatch = useAppDispatch();
  const Navigate = useNavigate();

  const onSubmit = async (userCredentials: UserCredentials) => {
    const token = await getUserToken(userCredentials);

    if (!token) {
      return;
    }

    const userData = getTokenData(token);

    const tokenData: UserTokenStructure = {
      ...userData,
      token,
    };

    dispatch(loginUserActionCreator(tokenData));

    setToken("token", token);

    Navigate(paths.home);
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
