import { SneakerStructure } from "../../store/sneakers/types";
import SneakerCardStyled from "./SneakerCardStyled";

interface SneakerCardProps {
  sneaker: SneakerStructure;
}

const SneakerCard = ({
  sneaker: { image, name, brand },
}: SneakerCardProps): React.ReactElement => {
  return (
    <SneakerCardStyled className="card">
      <div>
        <img
          className="card__image"
          src={image}
          alt={`Model ${name} from ${brand}`}
          width="272"
          height="272"
        />
      </div>
      <div className="card__text">
        <h2 className="card__text__name">{name}</h2>
        <span className="card__text__brand">{brand}</span>
      </div>
    </SneakerCardStyled>
  );
};

export default SneakerCard;
