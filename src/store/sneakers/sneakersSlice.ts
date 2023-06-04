import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SneakerStructure, SneakersStateStructure } from "./types";

const initialState: SneakersStateStructure = {
  sneakers: [],
};

const sneakersSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {
    loadSneakers: (
      currentState: SneakersStateStructure,
      action: PayloadAction<SneakerStructure[]>
    ) => ({
      ...currentState,
      sneakers: [...action.payload],
    }),
  },
});

export const { loadSneakers: loadSneakersActionCreator } =
  sneakersSlice.actions;
export const sneakersReducer = sneakersSlice.reducer;
