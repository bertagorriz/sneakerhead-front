import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "./Navbar";
import theme from "../../styles/theme";

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

      render(
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      );

      const addLink = screen.getByRole("link", { name: "add-sneaker" });
      const homeLink = screen.getByRole("link", { name: "home" });
      const logoutLink = screen.getByRole("link", { name: "logout" });

      expect(addLink).toBeInTheDocument();
      expect(homeLink).toBeInTheDocument();
      expect(logoutLink).toBeInTheDocument();
    });
  });
});
