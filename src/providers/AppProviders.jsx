import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '@/assets/styles/GlobalStyle'
import { darkTheme, lightTheme, theme } from '@/assets/styles/theme'

const AppProviders = ({ children }) => {
  const colorsThemeMode =
    useSelector((state) => state.theme.theme) === 'light' ? lightTheme : darkTheme

  // Provider with store should be in main.jsx, because we use right there useSelector
  return (
    <Router>
      <ThemeProvider theme={{ ...theme, colors: colorsThemeMode }}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </Router>
  )
}

export default AppProviders
