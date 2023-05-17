import React from 'react'

import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { theme } from '@/assets/styles/theme'
import StoreProvider from '@/providers/StoreProvider'

export const renderWithProviders = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      <StoreProvider>{children}</StoreProvider>
    </ThemeProvider>
  )
}
