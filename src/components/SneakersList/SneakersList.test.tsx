import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getSneakersDataMock } from "../../mocks/factories/sneakersFactory";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import SneakersList from "./SneakersList";
import { sneakerMock, sneakerMockId } from "../../mocks/sneakersMock";
import ListPage from "../../pages/ListPage/ListPage";
import { userLoggedMock } from "../../mocks/userMock";

describe("Given a SneakersList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show '990v5' heading", async () => {
      const sneakersMock = {
        sneakers: getSneakersDataMock(1, { name: "990v5" }),
      };

      renderWithProviders(<SneakersList />, { sneakersStore: sneakersMock });

      const expectedTitle = screen.getByRole("heading", {
        name: sneakersMock.sneakers[0].name,
      });

      expect(expectedTitle).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a list of sneakers and the user clicks on the delete button of a sneaker", () => {
    test("Then it should remove the clicked sneaker from the list", async () => {
      const userData = userLoggedMock;
      sneakerMock.push(sneakerMockId);
      const buttonText = "delete";

      renderWithProviders(wrapWithRouter(<ListPage />), {
        sneakersStore: { sneakers: sneakerMock },
        userStore: {
          id: userData.id,
          isLogged: userData.isLogged,
          name: userData.name,
          token: userData.token,
        },
      });

      const title = screen.getByRole("heading", { name: sneakerMockId.name });
      const button = screen.getByRole("button", {
        name: buttonText,
      });

      await userEvent.click(button);

      expect(title).not.toBeInTheDocument();
    });
  });
});
