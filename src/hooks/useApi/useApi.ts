import { useCallback } from "react";
import axios from "axios";
import {
  SneakerStructure,
  SneakersApiStructure,
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
  const { limit } = useAppSelector((state) => state.sneakersStore);

  const dispatch = useAppDispatch();

  const getSneakers = useCallback(async (): Promise<SneakersApiStructure> => {
    try {
      dispatch(showLoaderActionCreator());

      const {
        data: { sneakers, totalSneakers },
      } = await axios.get<SneakersApiStructure>(
        `${apiUrl}${paths.sneakers}?limit=${limit}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(hideLoaderActionCreator());

      return { sneakers, totalSneakers };
    } catch {
      const error = "Sorry, sneakers couldn't be loaded";

      dispatch(showFeedbackActionCreator({ isError: true, message: error }));
      throw error;
    }
  }, [dispatch, token, limit]);

  const deleteSneaker = async (id: string): Promise<void> => {
    try {
      dispatch(showLoaderActionCreator());

      await axios.delete<void>(
        `${apiUrl}${paths.sneakers}${paths.delete}/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(hideLoaderActionCreator());

      dispatch(
        showFeedbackActionCreator({
          isError: false,
          message: "Sneaker removed successfully!",
        })
      );
    } catch {
      const error = "Sneaker couldn't be removed...";

      dispatch(showFeedbackActionCreator({ isError: true, message: error }));
    }
  };

  const addSneaker = async (
    sneakerData: Partial<SneakerStructure>
  ): Promise<SneakerStructure | undefined> => {
    try {
      dispatch(showLoaderActionCreator());

      const {
        data: { newSneaker },
      } = await axios.post<{ newSneaker: SneakerStructure }>(
        `${apiUrl}${paths.sneakers}/`,
        sneakerData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(hideLoaderActionCreator());

      dispatch(
        showFeedbackActionCreator({
          isError: false,
          message: "Sneaker added successfully!",
        })
      );

      return newSneaker;
    } catch {
      const error = "Sneaker couldn't be added...";

      dispatch(hideLoaderActionCreator());

      dispatch(showFeedbackActionCreator({ isError: true, message: error }));
    }
  };

  const getSneakerById = useCallback(
    async (id: string): Promise<SneakerStructure | undefined> => {
      try {
        dispatch(showLoaderActionCreator());

        const {
          data: { sneaker },
        } = await axios.get<{ sneaker: SneakerStructure }>(
          `${apiUrl}${paths.sneakers}/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        dispatch(hideLoaderActionCreator());

        return sneaker;
      } catch {
        const error = "Couldn't find the sneaker...";

        dispatch(showFeedbackActionCreator({ isError: true, message: error }));
      }
    },
    [dispatch, token]
  );

  return { getSneakers, deleteSneaker, addSneaker, getSneakerById };
};

export default useApi;
