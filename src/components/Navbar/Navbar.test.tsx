import { screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar";
import renderWithProviders from "../../utils/testUtils";

describe("Given a Navbar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show three links", () => {
      const routes = [
        {
          path: "/",
          element: <Navbar />,
        },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const addLink = screen.getByRole("link", { name: "add-sneaker" });
      const homeLink = screen.getByRole("link", { name: "home" });
      const logoutButton = screen.getByRole("button", { name: "logout" });

      expect(addLink).toBeInTheDocument();
      expect(homeLink).toBeInTheDocument();
      expect(logoutButton).toBeInTheDocument();
    });
  });
});
