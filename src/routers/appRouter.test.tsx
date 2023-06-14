import { RouterProvider } from "react-router-dom";
import { renderWithProviders } from "../utils/testUtils";
import appRouter from "./appRouter";
import { screen } from "@testing-library/react";

describe("Given an appRouter", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with 'Sneakerhead' logo", () => {
      renderWithProviders(<RouterProvider router={appRouter} />);

      const expectedAltText = "sneakerhead logo";

      const logo = screen.getByAltText(expectedAltText);

      expect(logo).toBeInTheDocument();
    });
  });
});
