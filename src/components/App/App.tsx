import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import useToken from "../../hooks/useToken/useToken";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import Layout from "../Layout/Layout";
import { useEffect } from "react";

const App = (): React.ReactElement => {
  const { getToken } = useLocalStorage();
  const { getTokenData } = useToken();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getToken("token");

    if (token) {
      const userData = getTokenData(token);

      dispatch(loginUserActionCreator(userData));
    }
  }, [getToken, getTokenData, dispatch]);

  return <Layout />;
};

export default App;
