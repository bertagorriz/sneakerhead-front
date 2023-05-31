import { renderHook } from "@testing-library/react";
import { tokenMock } from "../../mocks/tokenMock";
import { userCredentialsMock } from "../../mocks/userMock";
import { UserCredentials } from "../../store/user/types";
import useUser from "./useUser";

describe("Given a useUser custom hook", () => {
  describe("When the getUserToken is invoked with a valid username and a valid password", () => {
    test("Then it should return the corresponding token", async () => {
      const user: UserCredentials = userCredentialsMock;
      const expectedToken = tokenMock;

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());

      const token = await getUserToken(user);

      expect(token).toBe(expectedToken);
    });
  });
});
