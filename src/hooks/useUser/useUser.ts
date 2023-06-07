import axios from "axios";
import { UserCredentials } from "../../store/user/types";
import { useAppDispatch } from "../../store";
import {
  hideLoaderActionCreator,
  showFeedbackActionCreator,
  showLoaderActionCreator,
} from "../../store/ui/uiSlice";

const useUser = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const dispatch = useAppDispatch();

  const getUserToken = async (
    userCredentials: UserCredentials
  ): Promise<string | undefined> => {
    try {
      dispatch(showLoaderActionCreator());

      const {
        data: { token },
      } = await axios.post(`${apiUrl}/user/login`, userCredentials);

      return token;
    } catch {
      dispatch(hideLoaderActionCreator());

      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: "Wrong credentials, please try again",
        })
      );
    }
  };

  return { getUserToken };
};

export default useUser;
