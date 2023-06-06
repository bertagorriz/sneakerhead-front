import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UiFeedbackStateStructure, UiStateStructure } from "./types";

const initialUiState: UiStateStructure = {
  isLoading: false,
  isError: false,
  message: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoader: (currentState: UiStateStructure) => ({
      ...currentState,
      isLoading: true,
    }),
    hideLoader: (currentState: UiStateStructure) => ({
      ...currentState,
      isLoading: false,
    }),
    showFeedback: (
      currentState: UiStateStructure,
      action: PayloadAction<UiFeedbackStateStructure>
    ) => ({
      ...currentState,
      isError: action.payload.isError,
      message: action.payload.message,
    }),
    hideFeedback: (currentState: UiStateStructure) => ({
      ...currentState,
      isError: false,
      message: "",
    }),
  },
});

export const {
  showLoader: showLoaderActionCreator,
  hideLoader: hideLoaderActionCreator,
  showFeedback: showFeedbackActionCreator,
  hideFeedback: hideFeedbackActionCreator,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
