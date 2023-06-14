import { renderHook } from "@testing-library/react";
import { SneakersApiStructure } from "../../store/sneakers/types";
import useApi from "./useApi";
import { wrapWithProviders } from "../../utils/testUtils";
import {
  sneakerMock,
  sneakerMockAdded,
  sneakerMockToAdd,
} from "../../mocks/sneakersMock";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { store } from "../../store";

describe("Given a getSneakers function", () => {
  describe("When it is invoked with a valid token", () => {
    test("Then it should return a list of sneakers", async () => {
      const sneakersList: SneakersApiStructure = {
        sneakers: sneakerMock,
        totalSneakers: sneakerMock.length,
      };

      const {
        result: {
          current: { getSneakers },
        },
      } = renderHook(() => useApi(), { wrapper: wrapWithProviders });

      const expectedSneakersList = await getSneakers();

      expect(expectedSneakersList).toStrictEqual(sneakersList);
    });
  });

  describe("When it is invoked with an invalid token", () => {
    test("Then it sholud throw an error with 'Sorry, sneakers couldn't be loaded' message", () => {
      server.resetHandlers(...errorHandlers);

      const expectedError = "Sorry, sneakers couldn't be loaded";

      const {
        result: {
          current: { getSneakers },
        },
      } = renderHook(() => useApi(), { wrapper: wrapWithProviders });

      const sneakers = getSneakers();

      expect(sneakers).rejects.toThrowError(expectedError);
    });
  });
});

describe("Given a deleteSneakers function", () => {
  describe("When it is invoked with a valid id", () => {
    test("Then it should show a modal with 'Sneaker removed successfully!' message", async () => {
      const expectedMessage = "Sneaker removed successfully!";

      const {
        result: {
          current: { deleteSneaker },
        },
      } = renderHook(() => useApi(), { wrapper: wrapWithProviders });

      await deleteSneaker(sneakerMock[1].id);

      const message = store.getState().uiStore.message;

      expect(message).toBe(expectedMessage);
    });
  });

  describe("When it is invoked with an invalid id", () => {
    test("Then it should show a modal with a close button", async () => {
      server.resetHandlers(...errorHandlers);

      const expectedMessage = "Sneaker couldn't be removed...";

      const {
        result: {
          current: { deleteSneaker },
        },
      } = renderHook(() => useApi(), { wrapper: wrapWithProviders });

      await deleteSneaker(sneakerMock[1].id);

      const message = store.getState().uiStore.message;

      expect(message).toBe(expectedMessage);
    });
  });
});

describe("Given an addSneakers function", () => {
  describe("When it is invoked with a valid senaker data", () => {
    test("Then it should return the new sneaker", async () => {
      const expectedSneaker = sneakerMockAdded;
      const {
        result: {
          current: { addSneaker },
        },
      } = renderHook(() => useApi(), { wrapper: wrapWithProviders });

      const sneakerToAdd = await addSneaker(sneakerMockToAdd);

      expect(sneakerToAdd).toStrictEqual(expectedSneaker);
    });
  });

  describe("When it is invoked with an invalid sneaker data", () => {
    test("Then it sholud throw an error with 'Sneaker couldn't be added...' message", async () => {
      server.resetHandlers(...errorHandlers);

      const expectedError = "Sneaker couldn't be added...";

      const {
        result: {
          current: { addSneaker },
        },
      } = renderHook(() => useApi(), { wrapper: wrapWithProviders });

      await addSneaker(sneakerMockToAdd);

      const message = store.getState().uiStore.message;

      expect(message).toBe(expectedError);
    });
  });
});

describe("Given a getSneakersById function", () => {
  const id = "646fb28a61b26ee42aa53976";

  describe("When it is invoked with a valid id", () => {
    test("Then it should return the beach with the id", async () => {
      const expectedSneaker = sneakerMockAdded;

      const {
        result: {
          current: { getSneakerById },
        },
      } = renderHook(() => useApi(), { wrapper: wrapWithProviders });

      const sneaker = await getSneakerById(id);

      expect(sneaker).toStrictEqual(expectedSneaker);
    });
  });

  describe("When it is invoked with an invalid id", () => {
    test("Then it should throw an error with 'Couldn't find the sneaker...' message", async () => {
      server.resetHandlers(...errorHandlers);

      const expectedError = "Couldn't find the sneaker...";

      const {
        result: {
          current: { getSneakerById },
        },
      } = renderHook(() => useApi(), { wrapper: wrapWithProviders });

      await getSneakerById(id);

      const message = store.getState().uiStore.message;

      expect(message).toBe(expectedError);
    });
  });
});
