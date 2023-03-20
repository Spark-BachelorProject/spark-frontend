import { createGlobalStyle } from 'styled-components'

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
  }

  a, button {
  }


`
