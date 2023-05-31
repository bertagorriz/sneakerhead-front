import { screen } from "@testing-library/react";
import Header from "./Header";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Sneakerhead' logo", () => {
      const expectedAltText = "sneakerhead logo";

      renderWithProviders(wrapWithRouter(<Header />));

      const logo = screen.getByAltText(expectedAltText);

      expect(logo).toBeInTheDocument();
    });
  });
});
