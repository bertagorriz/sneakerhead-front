import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      text: string;
      textDisable: string;
      goodFeedback: string;
      wrongFeedback: string;
      none: string;
    };
    fonts: {
      fontFamily: string;
    };
    fontWeight: {
      weight400: string;
      weight700: string;
    };
    fontSize: {
      body: string;
      title: string;
    };
  }
}

export default DefaultTheme;
