import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import LoginPage from "./LoginPage";

describe("Given a LoginPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a H1 with 'Login to access to sneakers world' text", () => {
      const expectedText = "Login to access to sneakers world";

      renderWithProviders(wrapWithRouter(<LoginPage />));

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
