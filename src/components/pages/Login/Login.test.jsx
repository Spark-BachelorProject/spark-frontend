import React from 'react'
import { act } from 'react-dom/test-utils'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { fireEvent, screen } from '@testing-library/react'

import { loginSchema } from '@/assets/schemas/loginSchema'
import LoginInput from '@/components/molecules/LoginInput/LoginInput'
import { renderWithProviders } from '@/helpers/renderWithThemeProvider'

const TestComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) })

  return (
    <form action="post" data-testid="form" onSubmit={handleSubmit(() => {})}>
      <LoginInput
        placeholder="Email"
        type="email"
        {...register('email')}
        error={errors?.email?.message}
      />
      <LoginInput
        placeholder="Hasło"
        type="password"
        {...register('password')}
        error={errors?.password?.message}
      />
    </form>
  )
}

describe('Login', () => {
  it('Renders', () => {
    renderWithProviders(<TestComponent />)

    screen.getByPlaceholderText('Email')
  })

  it('Submit without errors', async () => {
    renderWithProviders(<TestComponent />)

    const emailInput = screen.getByPlaceholderText('Email')
    const passwordInput = screen.getByPlaceholderText('Hasło')
    const form = await screen.findByTestId('form')

    fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })

    await act(async () => {
      fireEvent.submit(form)
    })
  })

  it('Try submit but empty input make error', async () => {
    renderWithProviders(<TestComponent />)

    const emailInput = screen.getByPlaceholderText('Email')
    const passwordInput = screen.getByPlaceholderText('Hasło')
    const form = await screen.findByTestId('form')

    fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } })
    fireEvent.change(passwordInput, { target: { value: '' } })
    await act(async () => {
      fireEvent.submit(form)
    })

    screen.getByText(/wymagane/i)
  })
})
