import { useEffect, useState } from "react";
import SneakersList from "../../components/SneakersList/SneakersList";
import useApi from "../../hooks/useApi/useApi";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  loadMoreSneakersActionCreator,
  loadSneakersActionCreator,
} from "../../store/sneakers/sneakersSlice";
import SneakerListPageStyled from "./SneakerListPageStyled";
import Pagination from "../../components/Pagination/Pagination";

const SneakerListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getSneakers } = useApi();
  const { sneakers } = useAppSelector((state) => state.sneakersStore);
  const [totalSneakers, setTotalSneakers] = useState(0);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    if (loadMore === false) {
      scrollTo(0, 0);
    }

    (async () => {
      const response = await getSneakers();

      if (response) {
        const { sneakers, totalSneakers } = response;

        setTotalSneakers(totalSneakers);

        dispatch(loadSneakersActionCreator(sneakers));

        const parent = document.head;
        const firstChild = document.head.firstChild;

        for (let i = 0; i < 3; i++) {
          const preconnectElement = await document.createElement("link");
          preconnectElement.rel = "preload";
          preconnectElement.as = "image";
          preconnectElement.href = sneakers[i].image;

          parent.insertBefore(preconnectElement, firstChild);
        }
      }
    })();
  }, [getSneakers, dispatch, loadMore]);

  const handleOnLoadMore = () => {
    setLoadMore(true);
    dispatch(loadMoreSneakersActionCreator());
  };

  return (
    <SneakerListPageStyled>
      <h1 className="home-title">Home</h1>
      <SneakersList />
      {sneakers.length !== totalSneakers && (
        <Pagination actionOnClick={handleOnLoadMore} />
      )}
    </SneakerListPageStyled>
  );
};

export default SneakerListPage;
