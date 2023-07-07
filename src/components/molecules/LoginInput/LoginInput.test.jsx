import '@testing-library/jest-dom/extend-expect'
import { fireEvent, screen } from '@testing-library/react'

import { renderWithProviders } from '@/helpers/renderWithThemeProvider'

import LoginInput from './LoginInput'

describe('LoginInput', () => {
  it('Renders without errors', () => {
    renderWithProviders(
      <LoginInput name="email" onBlur={() => {}} onChange={() => {}} type="email" />
    )
  })

  it('Renders with errors', () => {
    const error = 'Invalid email'
    const element = renderWithProviders(
      <LoginInput name="email" error={error} onBlur={() => {}} onChange={() => {}} type="email" />
    )
    screen.getByText(error)

    const svgEl = element.container.querySelector('svg')
    expect(svgEl).toBeInTheDocument()
  })

  it('You can write some text in input', () => {
    renderWithProviders(
      <LoginInput
        name="email"
        onBlur={() => {}}
        onChange={() => {}}
        type="email"
        placeholder="Email"
      />
    )
    const input = screen.getByPlaceholderText('Email')
    fireEvent.change(input, { target: { value: 'test@gmail.com' } })

    expect(input.value).toMatch(/test/)
  })
})
