import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { userLoggedMock } from "../../mocks/userMock";
import { UserStateStructure } from "../../store/user/types";

describe("Given a Navbar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the add links", () => {
      const mockUserState: UserStateStructure = userLoggedMock;

      renderWithProviders(wrapWithRouter(<Navbar />), { user: mockUserState });

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
    test("Then it shouldn't show the logout button", async () => {
      const mockUserState: UserStateStructure = userLoggedMock;
      renderWithProviders(wrapWithRouter(<Navbar />), { user: mockUserState });

      const logoutButton = screen.getByRole("button", { name: "logout" });

      await userEvent.click(logoutButton);

      expect(logoutButton).not.toBeInTheDocument();
    });
  });
});
