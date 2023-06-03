import { screen, waitFor } from "@testing-library/react";
import { LazyListPage } from "../../routers/lazyComponents";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

describe("Given a ListPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a H1 with 'Home' text", async () => {
      const expectedTitle = "Home";

      renderWithProviders(wrapWithRouter(<LazyListPage />));

      const heading = await waitFor(() =>
        screen.getByRole("heading", {
          name: expectedTitle,
        })
      );

      expect(heading).toBeInTheDocument();
    });
  });
});
