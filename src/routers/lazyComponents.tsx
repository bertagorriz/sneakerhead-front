import { lazy } from "react";

export const LazyLoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
export const LazyListPage = lazy(() => import("../pages/ListPage/ListPage"));
export const LazyAddSneakerPage = lazy(
  () => import("../pages/AddSneakerPage/AddSneakerPage")
);
