import { getSneakersDataMock } from "../../mocks/factories/sneakersFactory";
import { deleteSneakersActionCreator, sneakersReducer } from "./sneakersSlice";
import { loadSneakersActionCreator } from "./sneakersSlice";
import { SneakersStateStructure } from "./types";

const sneakersList = getSneakersDataMock(5);

describe("Given a loadSneakers reducer", () => {
  describe("When it receives an empty current state and loadSneakers action with a list of 5 sneakers", () => {
    test("Then it should return the list of 5 sneakers", () => {
      const initialSneakersState: SneakersStateStructure = {
        sneakers: [],
      };
      const expectedSneakersState: SneakersStateStructure = {
        sneakers: sneakersList,
      };

      const newSneakersState = sneakersReducer(
        initialSneakersState,
        loadSneakersActionCreator(sneakersList)
      );

      expect(expectedSneakersState).toStrictEqual(newSneakersState);
    });
  });
});

describe("Given a deleteSneakers reducer", () => {
  describe("When it receives a curent state with a list of 5 sneakers and a deleteSneakers action with a valid sneaker id", () => {
    test("Then it should return the list without the sneaker matched with the id", () => {
      const initialSneakersState: SneakersStateStructure = {
        sneakers: sneakersList,
      };

      const newSneakersState = sneakersReducer(
        initialSneakersState,
        deleteSneakersActionCreator(sneakersList[0].id)
      );

      expect(newSneakersState.sneakers).toHaveLength(4);
    });
  });
});
