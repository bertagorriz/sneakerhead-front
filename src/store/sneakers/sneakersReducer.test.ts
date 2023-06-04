import { getSneakersDataMock } from "../../mocks/factories/sneakersFactory";
import { sneakersReducer } from "./sneakersSlice";
import { loadSneakersActionCreator } from "./sneakersSlice";
import { SneakersStateStructure } from "./types";

describe("Given a loadSneakers reducer", () => {
  describe("When it receives an empty current state and loadSneakers action with a list of 5 sneakers", () => {
    test("Then it should return the list of 5 sneakers", () => {
      const initialSneakersState: SneakersStateStructure = {
        sneakers: [],
      };
      const sneakersList = getSneakersDataMock(5);
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
