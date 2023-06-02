import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { RouteObject, RouterProvider, createMemoryRouter } from "react-router";
import paths from "../../routers/paths/paths";
import LoginPage from "../../pages/LoginPage/LoginPage";

describe("Given a Navbar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the add links", () => {
      renderWithProviders(wrapWithRouter(<Navbar />));

      const addLink = screen.getByRole("link", { name: "add-sneaker" });

      expect(addLink).toBeInTheDocument();
    });

    test("Then it should show the home link", () => {
      renderWithProviders(wrapWithRouter(<Navbar />));

      const homeLink = screen.getByRole("link", { name: "home" });

      expect(homeLink).toBeInTheDocument();
    });

    test("Then it should show the logout button", () => {
      renderWithProviders(wrapWithRouter(<Navbar />));

      const logoutButton = screen.getByRole("button", { name: "logout" });

      expect(logoutButton).toBeInTheDocument();
    });
  });

  describe("When the user is logged and clicks on the logout button", () => {
    test("Then it should redirect the user to the loginPage", async () => {
      const routes: RouteObject[] = [
        {
          path: "/",
          element: <Navbar />,
          children: [{ path: "/login", element: <LoginPage /> }],
        },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const button = screen.getByLabelText("logout");

      await userEvent.click(button);

      expect(router.state.location.pathname).toBe(paths.login);
    });
  });
});
