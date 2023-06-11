import { useState } from "react";
import Button from "../Button/Button";
import SneakerFormStyled from "./SneakerFormStyled";
import { SneakerAddStructure } from "../../store/sneakers/types";

interface SneakerFormProps {
  handleOnSubmit: (sneakerData: SneakerAddStructure) => void;
}

const SneakerForm = ({
  handleOnSubmit,
}: SneakerFormProps): React.ReactElement => {
  const initialSneakerState: SneakerAddStructure = {
    name: "",
    brand: "",
    image: "",
    price: 0,
    colors: [],
    features: {
      description: "",
      description2: "",
      isAvailable: false,
    },
  };
  const [sneakerData, setSneakerData] = useState(initialSneakerState);

  const onChangeData = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSneakerData({
      ...sneakerData,
      [event.target.id]: event.target.value,
    });
  };

  const onChangeColors = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedColor = event.target.value;
    const isSelected = sneakerData.colors.includes(selectedColor);

    let newColors = [];

    if (!isSelected) {
      newColors = [...sneakerData.colors, selectedColor];
    } else {
      newColors = sneakerData.colors.filter((color) => color !== selectedColor);
    }

    setSneakerData({
      ...sneakerData,
      colors: newColors,
    });
  };

  const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSneakerData({
      ...sneakerData,
      features: {
        ...sneakerData.features,
        [event.target.id]: event.target.checked,
      },
    });
  };

  const onChangeFeatures = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSneakerData({
      ...sneakerData,
      features: {
        ...sneakerData.features,
        [event.target.id]: event.target.value,
      },
    });
  };

  const actionOnClick = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    handleOnSubmit(sneakerData);
    setSneakerData(initialSneakerState);
  };

  const colorsArray: string[] = [];

  const isReady =
    sneakerData.name !== "" &&
    sneakerData.brand !== "" &&
    sneakerData.image !== "" &&
    sneakerData.price !== 0 &&
    sneakerData.colors !== colorsArray &&
    sneakerData.features.description !== "";

  return (
    <SneakerFormStyled
      className="form"
      autoComplete="off"
      onSubmit={actionOnClick}
      noValidate
    >
      <label className="form__label" htmlFor="name">
        Model
      </label>
      <input
        type="text"
        className="form__input"
        id="name"
        value={sneakerData.name}
        onChange={onChangeData}
      />
      <label className="form__label" htmlFor="brand">
        Brand
      </label>
      <select className="form__select" id="brand" onChange={onChangeData}>
        <option value="">select...</option>
        <option value="Nike">Nike</option>
        <option value="Adidas">Adidas</option>
        <option value="Jordan">Jordan</option>
        <option value="Puma">Puma</option>
        <option value="Converse">Converse</option>
        <option value="New Balance">New Balance</option>
        <option value="Vans">Vans</option>
        <option value="Reebok">Reebok</option>
        <option value="ASICS">ASICS</option>
        <option value="Under Armour">Under Armour</option>
        <option value="Salomon">Salomon</option>
        <option value="Saucony">Saucony</option>
        <option value="HOKA">HOKA</option>
        <option value="Mizuno">Mizuno</option>
        <option value="Veja">Veja</option>
      </select>
      <label className="form__label" htmlFor="image">
        Image Url
      </label>
      <input
        type="text"
        className="form__input"
        id="image"
        value={sneakerData.image}
        onChange={onChangeData}
      />
      <label className="form__label" htmlFor="price">
        Price €
      </label>
      <input
        type="number"
        className="form__input"
        id="price"
        value={sneakerData.price || ""}
        onChange={onChangeData}
      />
      <p className="form__label" aria-label="colors">
        Colors
      </p>
      <div className="form__checkbox-container">
        <input
          type="checkbox"
          className="form__checkbox"
          id="colors"
          value="Red"
          onChange={onChangeColors}
        />
        <label className="form__checkbox-label" htmlFor="colors">
          Red
        </label>
      </div>
      <div className="form__checkbox-container">
        <input
          type="checkbox"
          className="form__checkbox"
          id="colors"
          value="Orange"
          onChange={onChangeColors}
        />
        <label className="form__checkbox-label" htmlFor="colors">
          Orange
        </label>
      </div>
      <div className="form__checkbox-container">
        <input
          type="checkbox"
          className="form__checkbox"
          id="colors"
          value="Yellow"
          onChange={onChangeColors}
        />
        <label className="form__checkbox-label" htmlFor="colors">
          Yellow
        </label>
      </div>
      <div className="form__checkbox-container">
        <input
          type="checkbox"
          className="form__checkbox"
          id="colors"
          value="Green"
          onChange={onChangeColors}
        />
        <label className="form__checkbox-label" htmlFor="colors">
          Green
        </label>
      </div>
      <div className="form__checkbox-container">
        <input
          type="checkbox"
          className="form__checkbox"
          id="colors"
          value="Blue"
          onChange={onChangeColors}
        />
        <label className="form__checkbox-label" htmlFor="colors">
          Blue
        </label>
      </div>
      <div className="form__checkbox-container">
        <input
          type="checkbox"
          className="form__checkbox"
          id="colors"
          value="Purple"
          onChange={onChangeColors}
        />
        <label className="form__checkbox-label" htmlFor="colors">
          Purple
        </label>
      </div>
      <div className="form__checkbox-container">
        <input
          type="checkbox"
          className="form__checkbox"
          id="colors"
          value="Pink"
          onChange={onChangeColors}
        />
        <label className="form__checkbox-label" htmlFor="colors">
          Pink
        </label>
      </div>
      <div className="form__checkbox-container">
        <input
          type="checkbox"
          className="form__checkbox"
          id="colors"
          value="Brown"
          onChange={onChangeColors}
        />
        <label className="form__checkbox-label" htmlFor="colors">
          Brown
        </label>
      </div>
      <div className="form__checkbox-container">
        <input
          type="checkbox"
          className="form__checkbox"
          id="colors"
          value="Black"
          onChange={onChangeColors}
        />
        <label className="form__checkbox-label" htmlFor="colors">
          Black
        </label>
      </div>
      <div className="form__checkbox-container">
        <input
          type="checkbox"
          className="form__checkbox"
          id="colors"
          value="Grey"
          onChange={onChangeColors}
        />
        <label className="form__checkbox-label" htmlFor="colors">
          Grey
        </label>
      </div>
      <div className="form__checkbox-container__last">
        <input
          type="checkbox"
          className="form__checkbox"
          id="colors"
          value="White"
          onChange={onChangeColors}
        />
        <label className="form__checkbox-label" htmlFor="colors">
          White
        </label>
      </div>
      <label className="form__label" htmlFor="description">
        Description
      </label>
      <textarea
        className="form__textarea"
        id="description"
        rows={4}
        placeholder="add a description..."
        value={sneakerData.features.description}
        onChange={onChangeFeatures}
      />
      <label className="form__label" htmlFor="description2">
        Description 2
      </label>
      <textarea
        className="form__textarea"
        id="description2"
        rows={4}
        placeholder="would you like to add another description?..."
        value={sneakerData.features.description2}
        onChange={onChangeFeatures}
      />
      <p className="form__label">Availability</p>
      <div className="form__checkbox-container">
        <input
          type="checkbox"
          className="form__checkbox"
          id="isAvailable"
          checked={sneakerData.features.isAvailable}
          onChange={onChangeCheckbox}
        />
        <label className="form__checkbox-label" htmlFor="isAvailable">
          is available?
        </label>
      </div>
      <Button
        type="submit"
        className="form__button"
        text="Add"
        disabled={!isReady}
        actionOnClick={() => handleOnSubmit}
      />
    </SneakerFormStyled>
  );
};

export default SneakerForm;
