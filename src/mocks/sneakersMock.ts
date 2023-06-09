import {
  getSneakerDataMock,
  getSneakersDataMock,
} from "./factories/sneakersFactory";

export const sneakerMock = getSneakersDataMock(3);

export const sneakerMockId = getSneakerDataMock({
  user: "647104a861b26ee42aa5398b",
});
