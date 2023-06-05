import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Layout from "./Layout";
import { UiStateStructure } from "../../store/ui/types";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with 'Sneakerhead' logo", () => {
      renderWithProviders(wrapWithRouter(<Layout />));

      const expectedAltText = "sneakerhead logo";

      const logo = screen.getByAltText(expectedAltText);

      expect(logo).toBeInTheDocument();
    });

    test("Then it should show a loader if isLoading is set to true", () => {
      const trueLoadingState: UiStateStructure = { isLoading: true };
      const expectedAltText = "loader";

      renderWithProviders(wrapWithRouter(<Layout />), {
        uiStore: trueLoadingState,
      });

      const loader = screen.getByRole("generic", { name: expectedAltText });

      expect(loader).toBeInTheDocument();
    });
  });
});
