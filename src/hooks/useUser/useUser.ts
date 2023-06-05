import axios from "axios";
import { UserCredentials } from "../../store/user/types";
import { useAppDispatch } from "../../store";
import {
  hideLoaderActionCreator,
  showLoaderActionCreator,
} from "../../store/ui/uiSlice";

const useUser = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const dispatch = useAppDispatch();

  const getUserToken = async (
    userCredentials: UserCredentials
  ): Promise<string> => {
    try {
      dispatch(showLoaderActionCreator());

      const {
        data: { token },
      } = await axios.post(`${apiUrl}/user/login`, userCredentials);

      dispatch(hideLoaderActionCreator());

      return token;
    } catch {
      throw new Error("Wrong credentials");
    }
  };

  return { getUserToken };
};

export default useUser;
