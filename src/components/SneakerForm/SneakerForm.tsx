import Button from "../Button/Button";
import SneakerFormStyled from "./SneakerFormStyled";

const SneakerForm = (): React.ReactElement => {
  return (
    <SneakerFormStyled className="form" autoComplete="off" noValidate>
      <label className="form__label" htmlFor="model">
        Model
      </label>
      <input type="text" className="form__input" id="model" />
      <label className="form__label" htmlFor="brand">
        Brand
      </label>
      <select className="form__select" id="brand">
        <option value="" disabled selected>
          select...
        </option>
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
      <input type="text" className="form__input" id="image" />
      <label className="form__label" htmlFor="price">
        Price €
      </label>
      <input type="number" className="form__input" id="price" />
      <p className="form__label">Colors</p>
      <div className="form__checkbox-container">
        <input type="checkbox" className="form__checkbox" id="red" />
        <label className="form__checkbox-label" htmlFor="red">
          Red
        </label>
      </div>
      <div className="form__checkbox-container">
        <input type="checkbox" className="form__checkbox" id="orange" />
        <label className="form__checkbox-label" htmlFor="orange">
          Orange
        </label>
      </div>
      <div className="form__checkbox-container">
        <input type="checkbox" className="form__checkbox" id="yellow" />
        <label className="form__checkbox-label" htmlFor="yellow">
          Yellow
        </label>
      </div>
      <div className="form__checkbox-container">
        <input type="checkbox" className="form__checkbox" id="green" />
        <label className="form__checkbox-label" htmlFor="green">
          Green
        </label>
      </div>
      <div className="form__checkbox-container">
        <input type="checkbox" className="form__checkbox" id="blue" />
        <label className="form__checkbox-label" htmlFor="blue">
          Blue
        </label>
      </div>
      <div className="form__checkbox-container">
        <input type="checkbox" className="form__checkbox" id="purple" />
        <label className="form__checkbox-label" htmlFor="purple">
          Purple
        </label>
      </div>
      <div className="form__checkbox-container">
        <input type="checkbox" className="form__checkbox" id="pink" />
        <label className="form__checkbox-label" htmlFor="pink">
          Pink
        </label>
      </div>
      <div className="form__checkbox-container">
        <input type="checkbox" className="form__checkbox" id="brown" />
        <label className="form__checkbox-label" htmlFor="brown">
          Brown
        </label>
      </div>
      <div className="form__checkbox-container">
        <input type="checkbox" className="form__checkbox" id="black" />
        <label className="form__checkbox-label" htmlFor="black">
          Black
        </label>
      </div>
      <div className="form__checkbox-container">
        <input type="checkbox" className="form__checkbox" id="grey" />
        <label className="form__checkbox-label" htmlFor="grey">
          Grey
        </label>
      </div>
      <div className="form__checkbox-container__last">
        <input type="checkbox" className="form__checkbox" id="white" />
        <label className="form__checkbox-label" htmlFor="white">
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
      />
      <label className="form__label" htmlFor="description2">
        Description 2
      </label>
      <textarea
        className="form__textarea"
        id="description2"
        rows={4}
        placeholder="would you like to add another description?..."
      />
      <p className="form__label">Is available?</p>
      <div className="form__checkbox-container">
        <input type="checkbox" className="form__checkbox" id="yes" />
        <label className="form__checkbox-label" htmlFor="yes">
          Yes
        </label>
      </div>
      <div className="form__checkbox-container">
        <input type="checkbox" className="form__checkbox" id="no" />
        <label className="form__checkbox-label" htmlFor="no">
          No
        </label>
      </div>
      <Button type="submit" className="form__button" text="Add" />
    </SneakerFormStyled>
  );
};

export default SneakerForm;
