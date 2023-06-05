import { useAppSelector } from "../../store";
import SneakerCard from "../SneakerCard/SneakerCard";
import SneakersListStyled from "./SneakersListStyled";

const SneakersList = (): React.ReactElement => {
  const { sneakers } = useAppSelector((store) => store.senakersStore);
  return (
    <SneakersListStyled>
      {sneakers.map((sneaker, index) => (
        <li className="sneaker" key={sneaker.id}>
          <SneakerCard
            sneaker={sneaker}
            isLazy={index === 0 ? "eager" : "lazy"}
          />
        </li>
      ))}
    </SneakersListStyled>
  );
};

export default SneakersList;
