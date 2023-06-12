import { useEffect } from "react";
import SneakersList from "../../components/SneakersList/SneakersList";
import useApi from "../../hooks/useApi/useApi";
import { useAppDispatch } from "../../store";
import { loadSneakersActionCreator } from "../../store/sneakers/sneakersSlice";
import SneakerListPageStyled from "./SneakerListPageStyled";
import Pagination from "../../components/Pagination/Pagination";

const SneakerListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getSneakers } = useApi();

  useEffect(() => {
    (async () => {
      const sneakers = await getSneakers();

      if (sneakers) {
        dispatch(loadSneakersActionCreator(sneakers));

        const preconnectElement = await document.createElement("link");
        preconnectElement.rel = "preload";
        preconnectElement.as = "image";
        preconnectElement.href = sneakers[0].image;

        const parent = document.head;
        const firstChild = document.head.firstChild;

        parent.insertBefore(preconnectElement, firstChild);
      }
    })();
  }, [getSneakers, dispatch]);

  return (
    <SneakerListPageStyled>
      <h1 className="home-title">Home</h1>
      <SneakersList />
      <Pagination />
    </SneakerListPageStyled>
  );
};

export default SneakerListPage;
