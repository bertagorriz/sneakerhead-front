import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Pagination from "./Pagination";

const actionOnClick = vi.fn();

describe("Given a Pagination component", () => {
  describe("When it is rendered", () => {
    test("Then it shoul show a button with 'pagination' accessible text", () => {
      const buttonText = "pagination";
      renderWithProviders(
        wrapWithRouter(<Pagination actionOnClick={actionOnClick} />)
      );

      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user clicks on the button", () => {
    test("Then it should call the received action", async () => {
      const buttonText = "pagination";

      renderWithProviders(
        wrapWithRouter(<Pagination actionOnClick={actionOnClick} />)
      );

      const expectedButton = screen.getByRole("button", { name: buttonText });

      await userEvent.click(expectedButton);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
