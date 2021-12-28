import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  :root {
    --max-content-width: 1368px;

    --blue-500: #6DB8FD;
    --white-100: #fbfbfb;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(180deg, #272C34 0%, #111417 102.87%);
    font-family: 'Roboto', sans-serif;
    color: var(--white-100);
    min-height: 100vh;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`;