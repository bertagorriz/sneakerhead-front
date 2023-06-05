import { UiStateStructure } from "./types";
import { showLoaderActionCreator, uiReducer } from "./uiSlice";

describe("Given a showLoading reducer", () => {
  describe("When it receives a current state set to false and a showLoading action with a new state", () => {
    test("Then it should return a new current state set to true", () => {
      const currentLoadingState: UiStateStructure = { isLoading: false };
      const expectedLoadingState: UiStateStructure = { isLoading: true };

      const action = showLoaderActionCreator();
      const newLoadingState = uiReducer(currentLoadingState, action);

      expect(newLoadingState).toStrictEqual(expectedLoadingState);
    });
  });
});
