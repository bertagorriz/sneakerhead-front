import {
  getSneakerDataMock,
  getSneakersDataMock,
} from "../../mocks/factories/sneakersFactory";
import {
  addSneakersActionCreator,
  deleteSneakersActionCreator,
  sneakersReducer,
} from "./sneakersSlice";
import { loadSneakersActionCreator } from "./sneakersSlice";
import { SneakersStateStructure } from "./types";

const sneakersList = getSneakersDataMock(5);
const sneakerToAdd = getSneakerDataMock();

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

describe("Given an addSneakers reducer", () => {
  describe("When it receives a current state with a list of 5 sneakers and an addSneakers action with a new sneaker", () => {
    test("Then it should return the list with the new sneaker added", () => {
      const initialSneakersState: SneakersStateStructure = {
        sneakers: sneakersList,
      };

      const expectedSneakersState: SneakersStateStructure = {
        sneakers: [...initialSneakersState.sneakers, sneakerToAdd],
      };

      const newSneakersState = sneakersReducer(
        initialSneakersState,
        addSneakersActionCreator(sneakerToAdd)
      );

      expect(newSneakersState).toStrictEqual(expectedSneakersState);
    });
  });
});
