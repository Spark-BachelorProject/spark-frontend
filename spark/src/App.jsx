import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './assets/styles/theme'
import { GlobalStyle } from './assets/styles/GlobalStyle'
import styled from 'styled-components'

const MainDiv = styled.div`
  // its only example of component
  background-color: blue;
  width: 100vw;
  height: 300px;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainDiv>hello there</MainDiv>
    </ThemeProvider>
  )
}

export default App
