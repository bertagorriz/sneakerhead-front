import { rest } from "msw";
import { tokenMock } from "./tokenMock";
import paths from "../routers/paths/paths";
import { sneakerMock } from "./sneakersMock";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),

  rest.get(`${apiUrl}${paths.sneakers}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ sneakers: sneakerMock }));
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.get(`${apiUrl}${paths.sneakers}`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),
];
