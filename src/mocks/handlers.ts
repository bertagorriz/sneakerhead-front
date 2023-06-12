import { rest } from "msw";
import { tokenMock } from "./tokenMock";
import paths from "../routers/paths/paths";
import {
  sneakerLoadMoreMock,
  sneakerMock,
  sneakerMockAdded,
} from "./sneakersMock";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),

  rest.get(`${apiUrl}${paths.sneakers}`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ sneakers: sneakerMock, totalSneakers: sneakerMock.length })
    );
  }),

  rest.delete(
    `${apiUrl}${paths.sneakers}${paths.delete}/:id`,
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ message: "Sneaker removed successfully" })
      );
    }
  ),

  rest.post(`${apiUrl}${paths.sneakers}/`, (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json({ newSneaker: sneakerMockAdded }));
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.get(`${apiUrl}${paths.sneakers}`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.delete(
    `${apiUrl}${paths.sneakers}${paths.delete}/:id`,
    (_req, res, ctx) => {
      return res(ctx.status(404));
    }
  ),

  rest.post(`${apiUrl}${paths.sneakers}/`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),
];

export const paginationHandlers = [
  rest.get(`${apiUrl}${paths.sneakers}`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        sneakers: sneakerLoadMoreMock,
        totalSneakers: 5,
      })
    );
  }),
];
