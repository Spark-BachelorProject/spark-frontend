import React from 'react'
import { useSelector } from 'react-redux'

import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '@/assets/styles/GlobalStyle'
import { darkTheme, lightTheme, theme } from '@/assets/styles/theme'

const ThemeProviderAndStyles = ({ children }) => {
  const colorsThemeMode =
    useSelector((state) => state.theme.theme) === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={{ ...theme, colors: colorsThemeMode }}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

ThemeProviderAndStyles.propTypes = {
  children: PropTypes.node,
}

export default ThemeProviderAndStyles
