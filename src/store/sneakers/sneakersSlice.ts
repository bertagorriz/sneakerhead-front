import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SneakerStructure, SneakersStateStructure } from "./types";

const initialState: SneakersStateStructure = {
  sneakers: [],
  limit: 5,
  sneaker: {
    id: "",
    name: "",
    brand: "",
    image: "",
    price: 0,
    colors: [],
    features: {
      description: "",
      description2: "",
      isAvailable: false,
    },
    user: "",
  },
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
    loadMoreSneakers: (currentState): SneakersStateStructure => ({
      ...currentState,
      limit: currentState.limit + 5,
    }),
    loadSneakerById: (
      currentState: SneakersStateStructure,
      action: PayloadAction<SneakerStructure>
    ) => ({
      ...currentState,
      sneaker: action.payload,
    }),
  },
});

export const {
  loadSneakers: loadSneakersActionCreator,
  deleteSneakers: deleteSneakersActionCreator,
  addSneakers: addSneakersActionCreator,
  loadMoreSneakers: loadMoreSneakersActionCreator,
  loadSneakerById: loadSneakerByIdActionCreator,
} = sneakersSlice.actions;
export const sneakersReducer = sneakersSlice.reducer;
