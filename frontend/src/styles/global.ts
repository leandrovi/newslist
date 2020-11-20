import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    min-height: calc(100vh - 70px);
  }

  body {
    background: #F7F8F9;
    color: #040404;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }
`;
