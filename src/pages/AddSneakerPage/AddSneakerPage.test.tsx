import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import AddSneakerPage from "./AddSneakerPage";

describe("Given an AddSneakerPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a H1 with 'New One' text", () => {
      const expectedText = "New One";

      renderWithProviders(wrapWithRouter(<AddSneakerPage />));

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
