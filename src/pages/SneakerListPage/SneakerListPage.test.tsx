import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LazySneakerListPage } from "../../routers/lazyComponents";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import SneakerListPage from "./SneakerListPage";
import { server } from "../../mocks/server";
import { paginationHandlers } from "../../mocks/handlers";
import {
  sneakerEmptyMock,
  sneakerLoadMoreMock,
} from "../../mocks/sneakersMock";

describe("Given a SneakerListPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a H1 with 'Home' text", async () => {
      const expectedTitle = "Home";

      renderWithProviders(wrapWithRouter(<LazySneakerListPage />));

      const heading = await waitFor(() =>
        screen.getByRole("heading", {
          name: expectedTitle,
        })
      );

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When there is a list of 5 sneakers and the user clicks on the button 'Load more ...'", () => {
    test("Then it should show the next 5 sneakers", async () => {
      server.resetHandlers(...paginationHandlers);

      const buttonText = "pagination";

      renderWithProviders(wrapWithRouter(<SneakerListPage />), {
        sneakersStore: {
          sneakers: sneakerLoadMoreMock,
          limit: 5,
          sneaker: sneakerEmptyMock,
        },
      });

      const button = screen.getByLabelText(buttonText);

      await userEvent.click(button);

      const heading = screen.getByRole("heading", {
        name: sneakerLoadMoreMock[5].name,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
