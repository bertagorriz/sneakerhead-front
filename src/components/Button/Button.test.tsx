import { screen } from "@testing-library/dom";
import { renderWithProviders } from "../../utils/testUtils";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives the text 'Click' and it is rendered", () => {
    test("Then it should show a button with the text 'Click'", () => {
      const buttonText = "Click";
      renderWithProviders(<Button text={buttonText} />);

      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
