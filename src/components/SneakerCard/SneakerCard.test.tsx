import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { getSneakerDataMock } from "../../mocks/factories/sneakersFactory";
import { SneakerStructure } from "../../store/sneakers/types";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import SneakerCard from "./SneakerCard";
import ListPage from "../../pages/ListPage/ListPage";

describe("Given a SneakerCard component", () => {
  const sneakerMock: SneakerStructure = getSneakerDataMock({
    name: "990v5",
    brand: "New Balance",
    image: "Model 990v5 from New Balance",
  });

  describe("When it is rendered", () => {
    test("Then it should show a heading with '990v5' text", () => {
      renderWithProviders(
        wrapWithRouter(<SneakerCard sneaker={sneakerMock} isLazy={"eager"} />)
      );

      const expectedTitle = screen.getByRole("heading", {
        name: sneakerMock.name,
      });

      expect(expectedTitle).toBeInTheDocument();
    });

    test("Then it should show a span with 'New Balance' brand", () => {
      renderWithProviders(
        wrapWithRouter(<SneakerCard sneaker={sneakerMock} isLazy={"lazy"} />)
      );

      const expectedSpan = screen.getByText(sneakerMock.brand);

      expect(expectedSpan).toBeInTheDocument();
    });

    test("Then it should show a 990v5 NewBalance image", () => {
      renderWithProviders(
        wrapWithRouter(<SneakerCard sneaker={sneakerMock} isLazy={"lazy"} />)
      );

      const expectedImage = screen.getByRole("img", {
        name: sneakerMock.image,
      });

      expect(expectedImage).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the delete button is clicked on", () => {
    test("Then it shouldn't show the delete button", async () => {
      const expectedTitle = sneakerMock.name;
      const buttonText = "delete";

      renderWithProviders(wrapWithRouter(<ListPage />), {
        senakersStore: { sneakers: [sneakerMock] },
      });

      const title = screen.getByRole("heading", { name: expectedTitle });
      const button = screen.getByRole("button", {
        name: buttonText,
      });

      await userEvent.click(button);

      expect(title).not.toBeInTheDocument();
    });
  });
});
