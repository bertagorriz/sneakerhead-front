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
  },
});

export const { showLoader: showLoaderActionCreator } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
