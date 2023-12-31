import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Loader from "./Loader";

describe("Given a Loader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a loader", () => {
      const expectedTitle = "loader";

      renderWithProviders(wrapWithRouter(<Loader />));

      const loader = screen.getByTitle(expectedTitle);

      expect(loader).toBeInTheDocument();
    });
  });
});
