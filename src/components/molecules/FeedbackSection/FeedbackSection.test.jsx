import { screen } from '@testing-library/react'

import { renderWithProviders } from '@/helpers/renderWithThemeProvider'

import { FeedbackSection } from './FeedbackSection'

describe('FeedbackSection', () => {
  it('Renders without errors', () => {
    renderWithProviders(<FeedbackSection />)

    screen.getByText('Napisz feedback')
  })
})
