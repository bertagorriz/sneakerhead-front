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
    background-color: ${(props) => props.theme.color.secondary};
  }

  body,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  ul, li {
    list-style: none;
    padding: 0;
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
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
    padding: 0;
    margin: 0;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }
`;

export default GlobalStyle;
