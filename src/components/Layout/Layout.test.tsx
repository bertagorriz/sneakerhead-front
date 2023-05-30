import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with 'Sneakerhead' logo", () => {
      renderWithProviders(wrapWithRouter(<Layout />));

      const expectedAltText = "sneakerhead logo";

      const logo = screen.getByAltText(expectedAltText);

      expect(logo).toBeInTheDocument();
    });
  });
});
