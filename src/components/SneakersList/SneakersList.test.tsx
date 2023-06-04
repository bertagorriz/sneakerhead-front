import { screen } from "@testing-library/react";
import { getSneakersDataMock } from "../../mocks/factories/sneakersFactory";
import { renderWithProviders } from "../../utils/testUtils";
import SneakersList from "./SneakersList";

describe("Given a SneakersList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show '990v5' heading", async () => {
      const sneakersMock = {
        sneakers: getSneakersDataMock(1, { name: "990v5" }),
      };
      const title = sneakersMock.sneakers[0].name;

      renderWithProviders(<SneakersList />, { senakersStore: sneakersMock });

      const expectedTitle = screen.getByRole("heading", { name: title });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
