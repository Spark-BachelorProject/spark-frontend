import { createGlobalStyle } from 'styled-components'

//TODO: Add transition to theme change

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    background-color: ${({ theme }) => theme.colors.primaryBg};
    font-family: 'Open Sans', sans-serif;
    transition: background-color 0.2s linear;
  }

  a, button {
    font-family: inherit;
  }


`
