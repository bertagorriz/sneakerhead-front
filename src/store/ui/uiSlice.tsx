import { createSlice } from "@reduxjs/toolkit";
import { UiStateStructure } from "./types";

const initialState: UiStateStructure = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showLoading: (currentState: UiStateStructure) => ({
      ...currentState,
      isLoading: true,
    }),
  },
});

export const { showLoading: showLoadingActionCreator } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
