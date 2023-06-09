import { lazy } from "react";

export const LazyLoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
export const LazySneakerListPage = lazy(
  () => import("../pages/SneakerListPage/SneakerListPage")
);
export const LazyAddSneakerPage = lazy(
  () => import("../pages/AddSneakerPage/AddSneakerPage")
);
