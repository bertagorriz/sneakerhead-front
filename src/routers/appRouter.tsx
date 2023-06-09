import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import App from "../components/App/App";
import paths from "./paths/paths";
import { LazyListPage, LazyLoginPage } from "./lazyComponents";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AddSneakerPage from "../pages/AddSneakerPage/AddSneakerPage";

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
            <LazyListPage />
          </Suspense>
        ),
      },
      {
        path: paths.addSneaker,
        element: <AddSneakerPage />,
      },
      {
        path: "/*",
        element: <NotFoundPage />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
