import { useEffect } from "react";
import SneakersList from "../../components/SneakersList/SneakersList";
import useApi from "../../hooks/useApi/useApi";
import { useAppDispatch } from "../../store";
import { loadSneakersActionCreator } from "../../store/sneakers/sneakersSlice";
import SneakerListPageStyled from "./SneakerListPageStyled";

const SneakerListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getSneakers } = useApi();

  useEffect(() => {
    (async () => {
      const sneakers = await getSneakers();

      if (sneakers) {
        dispatch(loadSneakersActionCreator(sneakers));
      }
    })();
  }, [getSneakers, dispatch]);

  return (
    <SneakerListPageStyled>
      <h1 className="home-title">Home</h1>
      <SneakersList />
    </SneakerListPageStyled>
  );
};

export default SneakerListPage;
