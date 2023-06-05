import { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import useToken from "../../hooks/useToken/useToken";
import { useAppDispatch } from "../../store";
import { UserTokenStructure } from "../../store/user/types";
import { loginUserActionCreator } from "../../store/user/userSlice";
import Layout from "../Layout/Layout";

const App = (): React.ReactElement => {
  const { getToken } = useLocalStorage();
  const { getTokenData } = useToken();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getToken("token");

    if (!token) {
      return;
    }

    const userData = getTokenData(token);

    const tokenData: UserTokenStructure = {
      ...userData,
      token,
    };

    dispatch(loginUserActionCreator(tokenData));
  }, [getToken, getTokenData, dispatch]);

  return <Layout />;
};

export default App;
