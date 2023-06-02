import { renderHook } from "@testing-library/react";
import { tokenMock } from "../../mocks/tokenMock";
import { userCredentialsMock } from "../../mocks/userMock";
import { UserCredentials } from "../../store/user/types";
import useUser from "./useUser";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

describe("Given a useUser custom hook", () => {
  const user: UserCredentials = userCredentialsMock;
  const expectedToken = tokenMock;
  describe("When the getUserToken function is invoked with a valid username and a valid password", () => {
    test("Then it should return the corresponding token", async () => {
      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());

      const token = await getUserToken(user);

      expect(token).toBe(expectedToken);
    });
  });

  describe("When the getUserToken function is invoked with valid username and wrong password", () => {
    test("Then it should return the response's method status with a '401' status code", () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());

      const getTokenFunction = getUserToken(user);

      expect(getTokenFunction).rejects.toThrowError();
    });
  });
});
