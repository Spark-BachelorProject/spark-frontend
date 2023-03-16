import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import { GlobalStyle } from '@/assets/styles/GlobalStyle'
import { theme } from '@/assets/styles/theme'

const MainDiv = styled.div`
  // its only example of component
  background-color: blue;
  width: 100vw;
  height: 300vh;
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
