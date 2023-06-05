import { createSlice } from "@reduxjs/toolkit";
import { UiStateStructure } from "./types";

const initialState: UiStateStructure = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showLoader: (currentState: UiStateStructure) => ({
      ...currentState,
      isLoading: true,
    }),
    hideLoader: (currentState: UiStateStructure) => ({
      ...currentState,
      isLoading: false,
    }),
  },
});

export const {
  showLoader: showLoaderActionCreator,
  hideLoader: hideLoaderActionCreator,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
