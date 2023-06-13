import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getSneakersDataMock } from "../../mocks/factories/sneakersFactory";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import SneakersList from "./SneakersList";
import {
  sneakerEmptyMock,
  sneakerMock,
  sneakerMockId,
} from "../../mocks/sneakersMock";
import { userLoggedMock } from "../../mocks/userMock";

describe("Given a SneakersList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the name of the first sneaker as heading", async () => {
      const sneakersMock = {
        sneakers: getSneakersDataMock(1),
        limit: 5,
        sneaker: sneakerEmptyMock,
      };

      renderWithProviders(wrapWithRouter(<SneakersList />), {
        sneakersStore: sneakersMock,
      });

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

      renderWithProviders(wrapWithRouter(<SneakersList />), {
        sneakersStore: {
          sneakers: sneakerMock,
          limit: sneakerMock.length,
          sneaker: sneakerEmptyMock,
        },
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
