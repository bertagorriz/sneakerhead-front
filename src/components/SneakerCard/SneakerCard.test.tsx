import { screen } from "@testing-library/dom";
import { getSneakerDataMock } from "../../mocks/factories/sneakersFactory";
import { SneakerStructure } from "../../store/sneakers/types";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import SneakerCard from "./SneakerCard";

describe("Given a SneakerCard component", () => {
  const sneakerMock: SneakerStructure = getSneakerDataMock({
    name: "990v5",
    brand: "New Balance",
    image: "Model 990v5 from New Balance",
  });

  describe("When it is rendered", () => {
    test("Then it should show a heading with '990v5' text", () => {
      renderWithProviders(
        wrapWithRouter(<SneakerCard sneaker={sneakerMock} />)
      );

      const expectedTitle = screen.getByRole("heading", {
        name: sneakerMock.name,
      });

      expect(expectedTitle).toBeInTheDocument();
    });

    test("Then it should show a span with 'New Balance' brand", () => {
      renderWithProviders(
        wrapWithRouter(<SneakerCard sneaker={sneakerMock} />)
      );

      const expectedSpan = screen.getByText(sneakerMock.brand);

      expect(expectedSpan).toBeInTheDocument();
    });

    test("Then it should show a 990v5 NewBalance image", () => {
      renderWithProviders(
        wrapWithRouter(<SneakerCard sneaker={sneakerMock} />)
      );

      const expectedImage = screen.getByRole("img", {
        name: sneakerMock.image,
      });

      screen.debug();

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
