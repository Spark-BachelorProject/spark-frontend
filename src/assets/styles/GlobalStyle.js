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
    font-family: 'Open Sans', sans-serif;
    transition: background-color 0.2s linear;
    
  }

  a, button, input, textarea {
    font-family: inherit;
  }

  a {
    text-decoration: none;
  }

  // it define style color for alt attribute in img 
  img {
    color: ${({ theme }) => theme.colors.text};
  }

`
