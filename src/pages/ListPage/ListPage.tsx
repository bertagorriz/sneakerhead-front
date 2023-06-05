import { useEffect } from "react";
import SneakersList from "../../components/SneakersList/SneakersList";
import useApi from "../../hooks/useApi/useApi";
import { useAppDispatch } from "../../store";
import { loadSneakersActionCreator } from "../../store/sneakers/sneakersSlice";
import ListPageStyled from "./ListPageStyled";

const ListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getSneakers } = useApi();

  useEffect(() => {
    (async () => {
      const sneakers = await getSneakers();
      dispatch(loadSneakersActionCreator(sneakers));
    })();
  }, [getSneakers, dispatch]);

  return (
    <ListPageStyled>
      <h1 className="home-title">Home</h1>
      <SneakersList />
    </ListPageStyled>
  );
};

export default ListPage;
