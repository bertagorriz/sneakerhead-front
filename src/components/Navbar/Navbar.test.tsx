import { screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

describe("Given a Navbar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the add, home and logout links", () => {
      renderWithProviders(wrapWithRouter(<Navbar />));

      const addLink = screen.getByRole("link", { name: "add-sneaker" });
      const homeLink = screen.getByRole("link", { name: "home" });
      const logoutButton = screen.getByRole("button", { name: "logout" });

      expect(addLink).toBeInTheDocument();
      expect(homeLink).toBeInTheDocument();
      expect(logoutButton).toBeInTheDocument();
    });
  });
});
