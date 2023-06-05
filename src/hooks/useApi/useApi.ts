import { useCallback } from "react";
import axios from "axios";
import { SneakersStateStructure } from "../../store/sneakers/types";
import { useAppSelector } from "../../store";
import paths from "../../routers/paths/paths";

const apiUrl = import.meta.env.VITE_API_URL;

const useApi = () => {
  const { token } = useAppSelector((state) => state.userStore);

  const getSneakers = useCallback(async (): Promise<SneakersStateStructure> => {
    try {
      const { data: sneakers } = await axios.get<SneakersStateStructure>(
        `${apiUrl}${paths.sneakers}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return sneakers;
    } catch {
      throw new Error("Sorry, sneakers couldn't be loaded");
    }
  }, [token]);

  return { getSneakers };
};

export default useApi;
