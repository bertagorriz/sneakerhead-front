import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show an h2 with '404' message", () => {
      const expectedText = "404";

      renderWithProviders(wrapWithRouter(<NotFoundPage />));

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
