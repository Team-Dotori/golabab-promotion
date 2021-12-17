import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
  a {
    text-decoration: none;
  }
  body {
    font-family: "Noto Sans KR",sans-serif;
  }
`;

export default GlobalStyle;
