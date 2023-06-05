import { renderHook } from "@testing-library/react";
import { SneakerStructure } from "../../store/sneakers/types";
import useApi from "./useApi";
import { wrapWithProviders } from "../../utils/testUtils";
import { sneakerMock } from "../../mocks/sneakersMock";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

describe("Given a getSneakers function", () => {
  describe("When it is invoked with a valid token", () => {
    test("Then it should return a list of sneakers", async () => {
      const sneakersList: SneakerStructure[] = sneakerMock;

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
