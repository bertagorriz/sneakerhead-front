import { useAppSelector } from "../../store";
import SneakerCard from "../SneakerCard/SneakerCard";
import SneakersListStyled from "./SneakersListStyled";

const SneakersList = (): React.ReactElement => {
  const { sneakers } = useAppSelector((store) => store.sneakersStore);
  const { id } = useAppSelector((store) => store.userStore);
  return (
    <SneakersListStyled>
      {sneakers.map((sneaker, index) => (
        <li className="sneaker" key={sneaker.id}>
          <SneakerCard
            sneaker={sneaker}
            isLazy={index < 3 ? "eager" : "lazy"}
            userId={id}
          />
        </li>
      ))}
    </SneakersListStyled>
  );
};

export default SneakersList;
