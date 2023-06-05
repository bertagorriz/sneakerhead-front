import { UiStateStructure } from "./types";
import {
  hideLoaderActionCreator,
  showLoaderActionCreator,
  uiReducer,
} from "./uiSlice";

const trueLoadingState: UiStateStructure = { isLoading: true };
const falseLoadingState: UiStateStructure = { isLoading: false };

describe("Given a showLoading reducer", () => {
  describe("When it receives a current state set to false and a showLoading action with a new state", () => {
    test("Then it should return a new current state set to true", () => {
      const action = showLoaderActionCreator();

      const newLoadingState = uiReducer(falseLoadingState, action);

      expect(newLoadingState).toStrictEqual(trueLoadingState);
    });
  });
});

describe("Given a hideLoading reducer", () => {
  describe("When it receives a current state set to true and a hideLoading action with a new state", () => {
    test("Then it should return a new current state set to false", () => {
      const action = hideLoaderActionCreator();

      const newLoadingState = uiReducer(trueLoadingState, action);

      expect(newLoadingState).toStrictEqual(falseLoadingState);
    });
  });
});
