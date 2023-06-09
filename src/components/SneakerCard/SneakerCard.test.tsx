import { screen } from "@testing-library/dom";
import { getSneakerDataMock } from "../../mocks/factories/sneakersFactory";
import { SneakerStructure } from "../../store/sneakers/types";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import SneakerCard from "./SneakerCard";

describe("Given a SneakerCard component", () => {
  const sneakerMockDetails: SneakerStructure = getSneakerDataMock({
    name: "990v5",
    brand: "New Balance",
    image: "Model 990v5 from New Balance",
    user: "1",
  });

  describe("When it is rendered", () => {
    test("Then it should show a heading with '990v5' text", () => {
      renderWithProviders(
        wrapWithRouter(
          <SneakerCard
            sneaker={sneakerMockDetails}
            isLazy={"eager"}
            userId={"1"}
          />
        )
      );

      const expectedTitle = screen.getByRole("heading", {
        name: sneakerMockDetails.name,
      });

      expect(expectedTitle).toBeInTheDocument();
    });

    test("Then it should show a span with 'New Balance' brand", () => {
      renderWithProviders(
        wrapWithRouter(
          <SneakerCard
            sneaker={sneakerMockDetails}
            isLazy={"lazy"}
            userId={"1"}
          />
        )
      );

      const expectedSpan = screen.getByText(sneakerMockDetails.brand);

      expect(expectedSpan).toBeInTheDocument();
    });

    test("Then it should show a 990v5 NewBalance image", () => {
      renderWithProviders(
        wrapWithRouter(
          <SneakerCard
            sneaker={sneakerMockDetails}
            isLazy={"lazy"}
            userId={"1"}
          />
        )
      );

      const expectedImage = screen.getByRole("img", {
        name: sneakerMockDetails.image,
      });

      expect(expectedImage).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user id matches with an id card", () => {
    test("Then it should show a 'delete' button", () => {
      const expectedButtonText = "delete";

      renderWithProviders(
        wrapWithRouter(
          <SneakerCard
            sneaker={sneakerMockDetails}
            isLazy={"eager"}
            userId={"1"}
          />
        )
      );

      const expectedButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
