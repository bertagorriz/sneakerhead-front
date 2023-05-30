import { PreloadedState } from "@reduxjs/toolkit";
import { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { RootState, setupStore, store } from "../store";
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle/GlobalStyle";

const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={testStore}>{children}</Provider>
      </ThemeProvider>
    );
  };

  render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
