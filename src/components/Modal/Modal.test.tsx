import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Modal from "./Modal";
import { UiStateStructure } from "../../store/ui/types";
import { storeMock } from "../Layout/Layout.test";
import Layout from "../Layout/Layout";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

const store: UiStateStructure = {
  ...storeMock,
  isError: false,
  message: "Error",
};

describe("Given a Modal component", () => {
  const expectedAltText = "close";

  describe("When it is rendered with an error", () => {
    test("Then it should show a modal with a close button", () => {
      renderWithProviders(wrapWithRouter(<Modal />));

      const button = screen.getByRole("button", { name: expectedAltText });

      expect(button).toBeInTheDocument();
    });

    test("Then it should show a modal with an error feedback", () => {
      const expectedFeedback = store.message;

      const currentState = {
        ...store,
        state: {
          isError: true,
          message: "Error",
        },
      };

      renderWithProviders(<Modal />, { uiStore: currentState });

      const feedback = screen.getByText(expectedFeedback);

      expect(feedback).toBeInTheDocument();
    });
  });

  describe("When the close button is clicked on", () => {
    test("Then it should show the page without the modal", async () => {
      const routes = [
        {
          path: "/",
          element: <Layout />,
        },
      ];

      const router = createMemoryRouter(routes);

      const currentState: UiStateStructure = {
        ...store,
        isError: true,
        message: "Error",
      };
      renderWithProviders(<RouterProvider router={router} />, {
        uiStore: currentState,
      });

      const button = screen.getByRole("button", { name: expectedAltText });

      await userEvent.click(button);

      expect(button).not.toBeInTheDocument();
    });
  });
});
