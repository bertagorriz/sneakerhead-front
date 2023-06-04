import { SneakerStructure } from "../../store/sneakers/types";

interface SneakerCardProps {
  sneaker: SneakerStructure;
}

const SneakerCard = ({
  sneaker: { image, name, brand },
}: SneakerCardProps): React.ReactElement => {
  return (
    <article className="card">
      <img
        className="card__image"
        src={image}
        alt={`Model ${name} from ${brand}`}
        width="272"
        height="272"
      />
      <h2 className="card__name">{name}</h2>
      <span className="card__brand">{brand}</span>
    </article>
  );
};

export default SneakerCard;
