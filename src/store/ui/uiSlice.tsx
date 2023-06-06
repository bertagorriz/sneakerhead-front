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
  },
});

export const {
  showLoader: showLoaderActionCreator,
  hideLoader: hideLoaderActionCreator,
  showFeedback: showFeedbackActionCreator,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
