import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('${props => props.theme.fontSource}');

  body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.color};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

 
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

export default GlobalStyle;
