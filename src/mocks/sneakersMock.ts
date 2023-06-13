import { SneakerStructure } from "../store/sneakers/types";
import {
  getSneakerDataMock,
  getSneakerToAdd,
  getSneakersDataMock,
} from "./factories/sneakersFactory";

export const sneakerMock = getSneakersDataMock(3);

export const sneakerLoadMoreMock = getSneakersDataMock(10);

export const sneakerMockId = getSneakerDataMock({
  user: "647104a861b26ee42aa5398b",
});

export const sneakerMockToAdd = getSneakerToAdd();

export const sneakerMockAdded = getSneakerDataMock({
  ...sneakerMockToAdd,
  id: "646fb28a61b26ee42aa53976",
  user: "647104a861b26ee42aa5398b",
});

export const sneakerEmptyMock: SneakerStructure = {
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
};
