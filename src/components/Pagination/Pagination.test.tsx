import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Pagination from "./Pagination";

describe("Given a Pagination component", () => {
  describe("When it is rendered", () => {
    test("Then it shoul show a button with 'pagination' accessible text", () => {
      const buttonText = "pagination";
      renderWithProviders(wrapWithRouter(<Pagination />));

      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
