import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import App from "../components/App/App";
import paths from "./paths/paths";
import {
  LazySneakerListPage,
  LazyLoginPage,
  LazyNotFoundPage,
  LazySneakerDetailPageStyled,
  LazyAddSneakerPage,
} from "./lazyComponents";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={paths.login} replace />,
      },
      {
        path: paths.login,
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },
      {
        path: paths.home,
        element: (
          <Suspense>
            <LazySneakerListPage />
          </Suspense>
        ),
      },
      {
        path: paths.addSneaker,
        element: (
          <Suspense>
            <LazyAddSneakerPage />
          </Suspense>
        ),
      },
      {
        path: paths.details,
        element: (
          <Suspense>
            <LazySneakerDetailPageStyled />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense>
            <LazyNotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
