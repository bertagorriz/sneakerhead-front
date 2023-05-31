import { renderHook } from "@testing-library/react";
import { tokenMock } from "../../mocks/tokenMock";
import useLocalStorage from "./useLocalStorage";

beforeEach(() => {
  localStorage.clear();
});

describe("Given a useLocalStorage custom hook", () => {
  describe("When the setToken is invoked with a key 'token' and a value 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3MTMiLCJuYW1lIjoiQmVydGEifQ.f7t5YAJq_cMNN3OxSwNHitlXeI2eUHMPNqEjNNZXQLU'", () => {
    test("Then it should save the token in the local storage", async () => {
      const key = "token";
      const value = tokenMock;

      const {
        result: {
          current: { setToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, value);

      expect(localStorage.getItem(key)).toBe(value);
    });
  });
});
