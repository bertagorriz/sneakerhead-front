import { renderHook, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { store } from "../../store";
import {
  renderWithProviders,
  wrapWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils";
import SneakerDetailPage from "./SneakerDetailPage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import paths from "../../routers/paths/paths";
import { tokenMock } from "../../mocks/tokenMock";
import useApi from "../../hooks/useApi/useApi";
import { vi } from "vitest";
import { sneakerMockAdded } from "../../mocks/sneakersMock";

window.scrollTo = vi.fn().mockImplementation(() => ({}));

describe("Given a SneakerDetailPage", () => {
  describe("When it is rendered with a valid id", () => {
    test("Then it should show the sneaker's name as title", async () => {
      const route: RouteObject[] = [
        {
          path: paths.details,
          element: <SneakerDetailPage />,
        },
      ];

      const id = store.getState().sneakersStore.sneaker.id;

      const router = createMemoryRouter(route, {
        initialEntries: ["/", `/sneakers/${id}`],
      });

      renderWithProviders(<RouterProvider router={router} />, {
        userStore: { isLogged: true, id: "", name: "", token: tokenMock },
      });

      const sneakerName = store.getState().sneakersStore.sneaker.name;

      const title = await screen.getByRole("heading", { name: sneakerName });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a valid id and the user clicks on the delete button", () => {
    test("Then the heading shouldn't be in the document", async () => {
      const buttonText = /delete/i;

      const route: RouteObject[] = [
        {
          path: paths.details,
          element: <SneakerDetailPage />,
        },
      ];

      const id = store.getState().sneakersStore.sneaker.id;

      const router = createMemoryRouter(route, {
        initialEntries: ["/", `/sneakers/${id}`],
      });

      renderWithProviders(<RouterProvider router={router} />, {
        userStore: {
          isLogged: true,
          id: sneakerMockAdded.user,
          name: "Admin",
          token: tokenMock,
        },
      });

      const {
        result: {
          current: { deleteSneaker },
        },
      } = renderHook(() => useApi(), { wrapper: wrapWithProviders });

      const button = await waitFor(() =>
        screen.getByRole("button", { name: buttonText })
      );

      await deleteSneaker(id);

      await userEvent.click(button);

      const feedback = "Sneaker removed successfully!";

      await expect(feedback).toBe("Sneaker removed successfully!");
    });
  });

  describe("When it is rendered with a valid id and the sneaker is available", () => {
    test("Then it should show 'Commercially available!' inside a heading", () => {
      const expectedHeading = "Commercially available!";

      renderWithProviders(wrapWithRouter(<SneakerDetailPage />), {
        sneakersStore: {
          sneakers: [],
          limit: 5,
          sneaker: {
            id: "",
            name: "",
            brand: "",
            image: "",
            price: 0,
            colors: [],
            features: {
              description: "",
              description2: "Sneaker",
              isAvailable: true,
            },
            user: "",
          },
        },
      });

      const title = screen.getByRole("heading", { name: expectedHeading });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a valid id and the sneaker has a description2", () => {
    test("Then it should show the description2 inside a list", () => {
      const expectedDescription2 = "Sneaker";

      renderWithProviders(wrapWithRouter(<SneakerDetailPage />), {
        sneakersStore: {
          sneakers: [],
          limit: 5,
          sneaker: {
            id: "",
            name: "",
            brand: "",
            image: "",
            price: 0,
            colors: [],
            features: {
              description: "",
              description2: "Sneaker",
              isAvailable: true,
            },
            user: "",
          },
        },
      });

      const description2 = screen.getByText(expectedDescription2);

      expect(description2).toBeInTheDocument();
    });
  });
});
