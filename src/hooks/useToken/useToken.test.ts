import { renderHook } from "@testing-library/react";
import { tokenMock } from "../../mocks/tokenMock";
import { userMock } from "../../mocks/userMock";
import useToken from "./useToken";
import { UserTokenStructure } from "../../store/user/types";

describe("Given a useToken custom hook", () => {
  describe("When it receives a token", () => {
    test("Then it should call the getTokenData and return the decoded token", () => {
      const token = tokenMock;
      const expectedUserData: UserTokenStructure = userMock;

      const {
        result: {
          current: { getTokenData },
        },
      } = renderHook(() => useToken());

      const userData = getTokenData(token);

      expect(userData).toStrictEqual(expectedUserData);
    });
  });
});
