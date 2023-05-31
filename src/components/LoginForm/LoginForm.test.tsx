import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  const usernameLabel = "Username";
  const passwordLabel = "Password";
  const buttonText = "Login";
  const actionOnClick = vi.fn();

  describe("When it is rendered", () => {
    test("Then it should show an input with the label text username and another one wit the label text password", () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
      );

      const usernameInput = screen.getByLabelText(usernameLabel);
      const passwordInput = screen.getByLabelText(passwordLabel);

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show a button with the text login", () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
      );

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is rendered and it has a username and a password", () => {
    test("Then it should show the login button enabled", async () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
      );

      const usernameInput = screen.getByLabelText(usernameLabel);
      const passwordInput = screen.getByLabelText(passwordLabel);

      await userEvent.type(usernameInput, "Berta");
      await userEvent.type(passwordInput, "hola");

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeEnabled();
    });
  });

  describe("When the login button is clicked on", () => {
    test("Then it should call the received action", async () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
      );

      const usernameInput = screen.getByLabelText(usernameLabel);
      const passwordInput = screen.getByLabelText(passwordLabel);

      await userEvent.type(usernameInput, "Berta");
      await userEvent.type(passwordInput, "hola");

      const button = screen.getByRole("button", { name: buttonText });

      await userEvent.click(button);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
