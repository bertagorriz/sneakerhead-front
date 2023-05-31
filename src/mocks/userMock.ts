import { UserCredentials, UserTokenStructure } from "../store/user/types";
import { tokenMock } from "./tokenMock";

export const userMock: UserTokenStructure = {
  id: "647104a861b26ee42aa5398b",
  name: "ignasi",
  token: tokenMock,
};

export const userCredentialsMock: UserCredentials = {
  username: "Berta",
  password: "hola",
};
