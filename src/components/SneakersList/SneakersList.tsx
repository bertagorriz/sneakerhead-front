import { useAppSelector } from "../../store";
import SneakersListStyled from "./SneakersListStyled";

const SneakersList = (): React.ReactElement => {
  const { sneakers } = useAppSelector((store) => store.senakersStore);
  return (
    <SneakersListStyled>
      {sneakers.map((sneaker) => (
        <li className="sneaker" key={sneaker.id}>
          <h2>{sneaker.name}</h2>
        </li>
      ))}
    </SneakersListStyled>
  );
};

export default SneakersList;
