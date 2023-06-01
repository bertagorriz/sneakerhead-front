import { userMock } from "../../mocks/userMock";
import { UserStateStructure } from "./types";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a loginUser reducer", () => {
  describe("When it receives an empty current user state and a loginUser action with a new user data", () => {
    test("Then it should return a new state with the logged user data", () => {
      const user = userMock;

      const expectedUserState: UserStateStructure = {
        ...user,
        isLogged: true,
      };

      const currentUserState: UserStateStructure = {
        id: "",
        name: "",
        token: "",
        isLogged: false,
      };

      const newUserState = userReducer(
        currentUserState,
        loginUserActionCreator(user)
      );

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });
});
