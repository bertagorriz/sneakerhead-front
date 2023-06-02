import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouteObject, RouterProvider, createMemoryRouter } from "react-router";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import LoginPage from "./LoginPage";
import paths from "../../routers/paths/paths";
import { userCredentialsMock } from "../../mocks/userMock";

describe("Given a LoginPage", () => {
  const expectedText = "Login to access to sneakers world";

  const usernameLabel = "Username";
  const passwordLabel = "Password";
  const buttonText = "Login";

  describe("When it is rendered", () => {
    test("Then it should show a H1 with 'Login to access to sneakers world' text", () => {
      renderWithProviders(wrapWithRouter(<LoginPage />));

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is rendered with user valid credentials and clicks on the button 'Login'", () => {
    test("Then it should redirects to home page", async () => {
      const routes: RouteObject[] = [
        { path: "/", element: <LoginPage /> },
        { path: paths.home },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const usernameInput = screen.getByLabelText(usernameLabel);
      const passwordInput = screen.getByLabelText(passwordLabel);
      const button = screen.getByRole("button", { name: buttonText });

      await userEvent.type(usernameInput, userCredentialsMock.username);
      await userEvent.type(passwordInput, userCredentialsMock.password);
      await userEvent.click(button);

      expect(router.state.location.pathname).toBe(paths.home);
    });
  });
});
