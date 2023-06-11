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
    deleteSneakers: (
      currentState: SneakersStateStructure,
      action: PayloadAction<string>
    ) => ({
      ...currentState,
      sneakers: currentState.sneakers.filter(
        (sneaker) => sneaker.id !== action.payload
      ),
    }),
    addSneakers: (
      currentState: SneakersStateStructure,
      action: PayloadAction<SneakerStructure>
    ) => ({
      ...currentState,
      sneakers: [...currentState.sneakers, action.payload],
    }),
  },
});

export const {
  loadSneakers: loadSneakersActionCreator,
  deleteSneakers: deleteSneakersActionCreator,
  addSneakers: addSneakersActionCreator,
} = sneakersSlice.actions;
export const sneakersReducer = sneakersSlice.reducer;
