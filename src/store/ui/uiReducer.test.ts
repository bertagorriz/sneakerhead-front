import { storeMock } from "../../components/Layout/Layout.test";
import { UiFeedbackStateStructure, UiStateStructure } from "./types";
import {
  hideFeedbackActionCreator,
  hideLoaderActionCreator,
  showFeedbackActionCreator,
  showLoaderActionCreator,
  uiReducer,
} from "./uiSlice";

const trueLoadingState: UiStateStructure = { ...storeMock, isLoading: true };
const falseLoadingState: UiStateStructure = { ...storeMock, isLoading: false };

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

describe("Given a showFeedback reducer", () => {
  describe("When it receives a current state set to false and a showFeedback action with a new state", () => {
    test("Then it should return a new current state set to true", () => {
      const currentFeedbackState: UiStateStructure = {
        isLoading: false,
        isError: false,
        message: "",
      };
      const message = "Logout successful!We hope to see you soon...";
      const feedback: UiFeedbackStateStructure = {
        isError: true,
        message: message,
      };

      const action = showFeedbackActionCreator(feedback);

      const expectedFeedbackState: UiFeedbackStateStructure = {
        ...currentFeedbackState,
        isError: feedback.isError,
        message: feedback.message,
      };
      const newFeedbackState = uiReducer(currentFeedbackState, action);

      expect(newFeedbackState).toStrictEqual(expectedFeedbackState);
    });
  });
});

describe("Given a hideFeedback reducer", () => {
  describe("When it receives a current state set to true and a hideFeedback action with a new state", () => {
    test("Then it should return a new current state set to false", () => {
      const currentFeedbackState: UiStateStructure = {
        isLoading: false,
        isError: true,
        message: "Logout successful!We hope to see you soon...",
      };
      const message = "";
      const feedback: UiStateStructure = {
        ...currentFeedbackState,
        isError: false,
        message: message,
      };

      const action = hideFeedbackActionCreator();

      const expectedFeedbackState: UiFeedbackStateStructure = {
        ...currentFeedbackState,
        isError: feedback.isError,
        message: feedback.message,
      };
      const newFeedbackState = uiReducer(feedback, action);

      expect(newFeedbackState).toStrictEqual(expectedFeedbackState);
    });
  });
});
