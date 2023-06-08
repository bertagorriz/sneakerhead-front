import { renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouteObject, RouterProvider, createMemoryRouter } from "react-router";
import {
  renderWithProviders,
  wrapWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils";
import LoginPage from "./LoginPage";
import paths from "../../routers/paths/paths";
import { userCredentialsMock } from "../../mocks/userMock";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import useUser from "../../hooks/useUser/useUser";
import App from "../../components/App/App";
import { store } from "../../store";

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

  describe("When it is rendered with valid user credentials and clicks on the button 'Login'", () => {
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

  describe("When it is rendered with invalid username credentials", () => {
    test("Then it should show a modal with a 'close' button", async () => {
      server.use(...errorHandlers);

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapWithProviders });

      const routes = [
        {
          path: "/",
          element: <App />,
        },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      await getUserToken(userCredentialsMock);

      const button = await screen.getByRole("button", { name: "close" });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When the login button is clicked on with invalid credentials", () => {
    test("Then it should show a modal with 'Wrong credentials, please try again!' message", async () => {
      server.use(...errorHandlers);

      const expectedMessage = "Wrong credentials, please try again!";

      renderWithProviders(wrapWithRouter(<LoginPage />));

      const usernameInput = screen.getByLabelText(usernameLabel);
      const passwordInput = screen.getByLabelText(passwordLabel);

      await userEvent.type(usernameInput, userCredentialsMock.username);
      await userEvent.type(passwordInput, userCredentialsMock.password);

      const loginButton = screen.getByRole("button", { name: buttonText });

      await userEvent.click(loginButton);

      const newMessage = store.getState().uiStore.message;

      expect(newMessage).toBe(expectedMessage);
    });
  });
});
