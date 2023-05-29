import { createGlobalStyle } from "styled-components";
import "@fontsource/montserrat";

const GlobalStyle = createGlobalStyle`
*,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  html {
    font-family: ${(props) => props.theme.fonts.fontFamily};
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  input {
    font-family: inherit;
    border: none;
  }

  button {
    cursor: pointer;
    font: inherit;
    border: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyle;
