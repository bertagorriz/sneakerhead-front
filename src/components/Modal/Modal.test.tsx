import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Modal from "./Modal";

describe("Given a Modal component", () => {
  const expectedAltText = "close";

  describe("When it is rendered with an error", () => {
    test("Then it should show a modal with background color red and a close button", () => {
      const isError = false;

      renderWithProviders(wrapWithRouter(<Modal isError={isError} />));

      const button = screen.getByRole("button", { name: expectedAltText });

      expect(button).toBeInTheDocument();
    });

    test("Then it should show a modal with background color green and a close button", () => {
      const isError = true;

      renderWithProviders(wrapWithRouter(<Modal isError={isError} />));

      const button = screen.getByRole("button", { name: expectedAltText });

      expect(button).toBeInTheDocument();
    });
  });
});
