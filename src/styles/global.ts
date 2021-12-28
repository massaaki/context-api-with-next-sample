import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(180deg, #272C34 0%, #111417 102.87%);
    font-family: 'Roboto', sans-serif;
    color: #fafafa;
    min-height: 100vh;
  }

`;