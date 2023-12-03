import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import StoreProvider from './StoreProvider'
import ThemeProviderAndStyles from './ThemeProviderAndStyles'

// git merge --edit
const AppProviders = ({ children }) => {
  return (
    <StoreProvider>
      <Router>
        <ThemeProviderAndStyles>{children}</ThemeProviderAndStyles>
      </Router>
    </StoreProvider>
  )
}

export default AppProviders
