import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Layout from "./Layout";
import { UiStateStructure } from "../../store/ui/types";

export const storeMock = {
  isLoading: false,
  isError: false,
  message: "",
};

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with 'Sneakerhead' logo", () => {
      renderWithProviders(wrapWithRouter(<Layout />));

      const expectedAltText = "sneakerhead logo";

      const logo = screen.getByAltText(expectedAltText);

      expect(logo).toBeInTheDocument();
    });

    test("Then it should show a loader if isLoading is set to true", () => {
      const trueLoadingState: UiStateStructure = {
        ...storeMock,
        isLoading: true,
      };
      const expectedTitle = "loader";

      renderWithProviders(wrapWithRouter(<Layout />), {
        uiStore: trueLoadingState,
      });

      const loader = screen.getByTitle(expectedTitle);

      expect(loader).toBeInTheDocument();
    });
  });
});
