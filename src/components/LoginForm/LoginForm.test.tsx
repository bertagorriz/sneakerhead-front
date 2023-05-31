import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an input with the label text username and another one wit the label text password", () => {
      const usernameLabel = "Username";
      const passwordLabel = "Password";

      renderWithProviders(wrapWithRouter(<LoginForm />));

      const usernameInput = screen.getByLabelText(usernameLabel);
      const passwordInput = screen.getByLabelText(passwordLabel);

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show a button with the text login", () => {
      const buttonText = "Login";

      renderWithProviders(wrapWithRouter(<LoginForm />));

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });
});
