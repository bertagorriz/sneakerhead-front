import { useCallback } from "react";
import axios from "axios";
import {
  SneakerStructure,
  SneakersStateStructure,
} from "../../store/sneakers/types";
import { useAppDispatch, useAppSelector } from "../../store";
import paths from "../../routers/paths/paths";
import {
  hideLoaderActionCreator,
  showFeedbackActionCreator,
  showLoaderActionCreator,
} from "../../store/ui/uiSlice";

const apiUrl = import.meta.env.VITE_API_URL;

const useApi = () => {
  const { token } = useAppSelector((state) => state.userStore);
  const dispatch = useAppDispatch();

  const getSneakers = useCallback(async (): Promise<
    SneakerStructure[] | undefined
  > => {
    try {
      dispatch(showLoaderActionCreator());

      const {
        data: { sneakers },
      } = await axios.get<SneakersStateStructure>(
        `${apiUrl}${paths.sneakers}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(hideLoaderActionCreator());

      return sneakers;
    } catch {
      const error = "Sorry, sneakers couldn't be loaded";

      dispatch(showFeedbackActionCreator({ isError: true, message: error }));
      throw error;
    }
  }, [dispatch, token]);

  return { getSneakers };
};

export default useApi;
