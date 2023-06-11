import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import SneakerForm from "./SneakerForm";
import { getSneakerDataMock } from "../../mocks/factories/sneakersFactory";
import { SneakerStructure } from "../../store/sneakers/types";
import { vi } from "vitest";

const sneakerMockDetails: SneakerStructure = getSneakerDataMock({
  name: "990v5",
  brand: "New Balance",
  image: "Model 990v5 from New Balance",
});

const actionOnClick = vi.fn();

describe("Given a SneakerForm component", () => {
  const nameLabel = /model/i;
  const brandLabel = /brand/i;
  const imageLabel = /image url/i;
  const priceLabel = /price €/i;
  const colorLabel = /colors/i;
  const descriptionLabel = "Description";
  const description2Label = /description 2/i;
  const availabilityLabel = "is available?";
  const buttonText = /add/i;

  describe("When it is rendered", () => {
    test("Then it should show model, brand, image url, price €, colors, description, description2 and availability labels with their inputs", () => {
      renderWithProviders(
        wrapWithRouter(<SneakerForm handleOnSubmit={actionOnClick} />)
      );

      const nameInput = screen.getByLabelText(nameLabel);
      const brandInput = screen.getByLabelText(brandLabel);
      const imageInput = screen.getByLabelText(imageLabel);
      const priceInput = screen.getByLabelText(priceLabel);
      const colorInput = screen.getByText(colorLabel);
      const descriptionInput = screen.getByLabelText(descriptionLabel);
      const description2Input = screen.getByLabelText(description2Label);
      const availabilityInput = screen.getByLabelText(availabilityLabel);

      expect(nameInput).toBeInTheDocument();
      expect(brandInput).toBeInTheDocument();
      expect(imageInput).toBeInTheDocument();
      expect(priceInput).toBeInTheDocument();
      expect(colorInput).toBeInTheDocument();
      expect(descriptionInput).toBeInTheDocument();
      expect(description2Input).toBeInTheDocument();
      expect(availabilityInput).toBeInTheDocument();
    });

    test("Then it should show a button with 'add' text", () => {
      renderWithProviders(
        wrapWithRouter(<SneakerForm handleOnSubmit={actionOnClick} />)
      );

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });

    test("Then it should show the button with 'add' text disabled", () => {
      renderWithProviders(
        wrapWithRouter(<SneakerForm handleOnSubmit={actionOnClick} />)
      );

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeDisabled();
    });
  });

  describe("When it is rendered with all the inputs filled in", () => {
    test("Then it should show the button with 'add' text enabled", async () => {
      const redLabel = /red/i;
      const orangeLabel = /orange/i;
      const yellowLabel = /yellow/i;
      const greenLabel = /green/i;
      const blueLabel = /blue/i;
      const purpleLabel = /purple/i;
      const pinkLabel = /pink/i;
      const brownLabel = /brown/i;
      const blackLabel = /black/i;
      const greyLabel = /grey/i;
      const whiteLabel = /white/i;

      const nameText = sneakerMockDetails.name;
      const imageText = sneakerMockDetails.image;
      const priceText = "10";
      const descriptionText = sneakerMockDetails.features.description;

      renderWithProviders(
        wrapWithRouter(<SneakerForm handleOnSubmit={actionOnClick} />)
      );

      await userEvent.type(screen.getByLabelText(nameLabel), nameText);

      await userEvent.selectOptions(screen.getByLabelText(brandLabel), [
        "Nike",
      ]);
      await userEvent.selectOptions(screen.getByLabelText(brandLabel), [
        "Adidas",
      ]);
      await userEvent.selectOptions(screen.getByLabelText(brandLabel), [
        "Jordan",
      ]);
      await userEvent.selectOptions(screen.getByLabelText(brandLabel), [
        "Puma",
      ]);
      await userEvent.selectOptions(screen.getByLabelText(brandLabel), [
        "Converse",
      ]);
      await userEvent.selectOptions(screen.getByLabelText(brandLabel), [
        "New Balance",
      ]);
      await userEvent.selectOptions(screen.getByLabelText(brandLabel), [
        "Vans",
      ]);
      await userEvent.selectOptions(screen.getByLabelText(brandLabel), [
        "Reebok",
      ]);
      await userEvent.selectOptions(screen.getByLabelText(brandLabel), [
        "ASICS",
      ]);
      await userEvent.selectOptions(screen.getByLabelText(brandLabel), [
        "Under Armour",
      ]);
      await userEvent.selectOptions(screen.getByLabelText(brandLabel), [
        "Salomon",
      ]);
      await userEvent.selectOptions(screen.getByLabelText(brandLabel), [
        "Saucony",
      ]);
      await userEvent.selectOptions(screen.getByLabelText(brandLabel), [
        "HOKA",
      ]);
      await userEvent.selectOptions(screen.getByLabelText(brandLabel), [
        "Mizuno",
      ]);
      await userEvent.selectOptions(screen.getByLabelText(brandLabel), [
        "Veja",
      ]);

      await userEvent.type(screen.getByLabelText(imageLabel), imageText);

      await userEvent.type(screen.getByLabelText(priceLabel), priceText);

      await userEvent.click(screen.getByLabelText(redLabel));
      await userEvent.click(screen.getByLabelText(orangeLabel));
      await userEvent.click(screen.getByLabelText(yellowLabel));
      await userEvent.click(screen.getByLabelText(greenLabel));
      await userEvent.click(screen.getByLabelText(blueLabel));
      await userEvent.click(screen.getByLabelText(purpleLabel));
      await userEvent.click(screen.getByLabelText(pinkLabel));
      await userEvent.click(screen.getByLabelText(brownLabel));
      await userEvent.click(screen.getByLabelText(blackLabel));
      await userEvent.click(screen.getByLabelText(greyLabel));
      await userEvent.click(screen.getByLabelText(whiteLabel));

      await userEvent.type(
        screen.getByLabelText(descriptionLabel),
        descriptionText
      );

      await userEvent.click(screen.getByLabelText(availabilityLabel));

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeEnabled();

      await userEvent.click(button);

      expect(actionOnClick).toHaveBeenCalled();
    }, 50000);
  });
});
