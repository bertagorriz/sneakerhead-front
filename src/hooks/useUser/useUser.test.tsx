import { renderHook, screen } from "@testing-library/react";
import { tokenMock } from "../../mocks/tokenMock";
import { userCredentialsMock } from "../../mocks/userMock";
import { UserCredentials } from "../../store/user/types";
import useUser from "./useUser";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { renderWithProviders, wrapWithProviders } from "../../utils/testUtils";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import App from "../../components/App/App";

beforeAll(() => {
  server.resetHandlers();
});

describe("Given a useUser custom hook", () => {
  const user: UserCredentials = userCredentialsMock;
  const expectedToken = tokenMock;
  describe("When the getUserToken function is invoked with a valid username and a valid password", () => {
    test("Then it should return the corresponding token", async () => {
      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapWithProviders });

      const token = await getUserToken(user);

      expect(token).toBe(expectedToken);
    });
  });

  describe("When the getUserToken function is invoked with invalid username and wrong password", () => {
    test("Then it should show a modal with a 'close' button", async () => {
      server.resetHandlers(...errorHandlers);

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
});
