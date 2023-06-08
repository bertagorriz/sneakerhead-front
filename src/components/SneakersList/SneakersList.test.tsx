import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getSneakersDataMock } from "../../mocks/factories/sneakersFactory";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import SneakersList from "./SneakersList";
import ListPage from "../../pages/ListPage/ListPage";

describe("Given a SneakersList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show '990v5' heading", async () => {
      const sneakersMock = {
        sneakers: getSneakersDataMock(1, { name: "990v5" }),
      };

      renderWithProviders(<SneakersList />, { senakersStore: sneakersMock });

      const expectedTitle = screen.getByRole("heading", {
        name: sneakersMock.sneakers[0].name,
      });

      expect(expectedTitle).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a list of sneakers and the user clicks on the delete button of a sneaker", () => {
    test("Then it should remove the clicked sneaker from the list", async () => {
      const sneakersList = getSneakersDataMock(3);
      const buttonText = "delete";

      renderWithProviders(wrapWithRouter(<ListPage />), {
        senakersStore: { sneakers: sneakersList },
      });

      const title = screen.getByRole("heading", { name: sneakersList[0].name });
      const button = screen.getAllByRole("button", {
        name: buttonText,
      });

      await userEvent.click(button[0]);

      expect(title).not.toBeInTheDocument();
    });
  });
});
