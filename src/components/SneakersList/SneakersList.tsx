import { useAppSelector } from "../../store";

const SneakersList = (): React.ReactElement => {
  const { sneakers } = useAppSelector((store) => store.senakersStore);
  return (
    <ul className="list">
      {sneakers.map((sneaker) => (
        <li className="sneaker" key={sneaker.id}>
          <h2>{sneaker.name}</h2>
        </li>
      ))}
    </ul>
  );
};

export default SneakersList;
