import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import "../node_modules/@fontsource/montserrat/800.css";
import "../node_modules/@fontsource/montserrat/600.css";
import "../node_modules/@fontsource/montserrat/400.css";
import { store } from "./store";
import theme from "./styles/theme/theme";
import GlobalStyle from "./styles/GlobalStyle/GlobalStyle";
import appRouter from "./routers/appRouter";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
