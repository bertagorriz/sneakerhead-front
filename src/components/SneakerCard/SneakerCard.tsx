import { SneakerStructure } from "../../store/sneakers/types";
import Button from "../Button/Button";
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
          width={272}
          height={272}
        />
      </div>
      <div className="card__text">
        <h2 className="card__text__name">{name}</h2>
        <span className="card__text__brand">{brand}</span>
      </div>
      <Button className="button__delete" aria-label="delete">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.4" y="0.4" width="47.2" height="47.2" fill="#FFC700" />
          <path
            d="M26.4281 24L38.7328 9.33281C38.9391 9.08906 38.7656 8.71875 38.4469 8.71875H34.7063C34.4859 8.71875 34.275 8.81719 34.1297 8.98594L23.9813 21.0844L13.8328 8.98594C13.6922 8.81719 13.4813 8.71875 13.2563 8.71875H9.51563C9.19688 8.71875 9.02345 9.08906 9.2297 9.33281L21.5344 24L9.2297 38.6672C9.18349 38.7215 9.15385 38.788 9.14429 38.8586C9.13473 38.9293 9.14565 39.0013 9.17576 39.0659C9.20587 39.1306 9.25389 39.1852 9.31414 39.2234C9.37438 39.2616 9.44432 39.2816 9.51563 39.2813H13.2563C13.4766 39.2813 13.6875 39.1828 13.8328 39.0141L23.9813 26.9156L34.1297 39.0141C34.2703 39.1828 34.4813 39.2813 34.7063 39.2813H38.4469C38.7656 39.2813 38.9391 38.9109 38.7328 38.6672L26.4281 24Z"
            fill="black"
          />
          <rect
            x="0.4"
            y="0.4"
            width="47.2"
            height="47.2"
            stroke="black"
            strokeWidth="0.8"
          />
        </svg>
      </Button>
      <Button className="button__edit" aria-label="edit">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.4"
            y="0.4"
            width="47.2"
            height="47.2"
            fill="#FFC700"
            stroke="black"
            strokeWidth="0.8"
          />
          <path
            d="M13.6914 33C13.7695 33 13.8477 32.9922 13.9258 32.9805L20.4961 31.8281C20.5742 31.8125 20.6484 31.7773 20.7031 31.7188L37.2617 15.1602C37.2979 15.124 37.3267 15.0811 37.3463 15.0338C37.3659 14.9866 37.376 14.9359 37.376 14.8848C37.376 14.8336 37.3659 14.7829 37.3463 14.7357C37.3267 14.6884 37.2979 14.6455 37.2617 14.6094L30.7695 8.11328C30.6953 8.03906 30.5977 8 30.4922 8C30.3867 8 30.2891 8.03906 30.2148 8.11328L13.6562 24.6719C13.5977 24.7305 13.5625 24.8008 13.5469 24.8789L12.3945 31.4492C12.3565 31.6585 12.3701 31.8739 12.4341 32.0767C12.4981 32.2795 12.6105 32.4637 12.7617 32.6133C13.0195 32.8633 13.3438 33 13.6914 33ZM16.3242 26.1875L30.4922 12.0234L33.3555 14.8867L19.1875 29.0508L15.7148 29.6641L16.3242 26.1875ZM38 36.2813H9.25C8.55859 36.2813 8 36.8398 8 37.5313V38.9375C8 39.1094 8.14063 39.25 8.3125 39.25H38.9375C39.1094 39.25 39.25 39.1094 39.25 38.9375V37.5313C39.25 36.8398 38.6914 36.2813 38 36.2813Z"
            fill="black"
          />
        </svg>
      </Button>
    </SneakerCardStyled>
  );
};

export default SneakerCard;
