import { getSneakersDataMock } from "../../mocks/factories/sneakersFactory";
import { useAppDispatch } from "../../store";
import { loadSneakersActionCreator } from "../../store/sneakers/sneakersSlice";
import ListPageStyled from "./ListPageStyled";

const ListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  dispatch(loadSneakersActionCreator(getSneakersDataMock(4)));

  return (
    <ListPageStyled>
      <h1 className="home-title">Home</h1>
    </ListPageStyled>
  );
};

export default ListPage;
