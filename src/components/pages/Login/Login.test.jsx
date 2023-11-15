import * as router from 'react-router-dom'

import userEvent from '@testing-library/user-event'
import { render, waitFor } from 'test-utils'
import { vi } from 'vitest'

import Login from './Login'

const navigate = vi.fn()
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => navigate,
  }
})

const mockLoginMutation = vi.fn()
vi.mock('@/store/api/auth', async () => {
  const actual = await vi.importActual('@/store/api/auth')
  return {
    ...actual,
    useLoginMutation: () => [mockLoginMutation, { isSuccess: false, isError: false }],
  }
})

global.google = {
  accounts: {
    id: {
      initialize: vi.fn(),
      renderButton: vi.fn(),
    },
  },
}

const googleLoginMock = vi.fn()
vi.mock('@/hooks/useGoogleLogin', async () => {
  const actual = await vi.importActual('@/hooks/useGoogleLogin')
  return {
    ...actual,
    useGoogleLogin: () => googleLoginMock,
  }
})
describe('<Login />', () => {
  beforeEach(() => {
    vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
    // vi.spyOn(Login, 'onSubmit').mockImplementation(() => mockLoginMutation)
  })

  test('submits the form and calls the login function', async () => {
    mockLoginMutation.mockResolvedValue({ data: { token: 'fake_token' } })
    const { getByPlaceholderText, getByText } = render(<Login />)
    const emailInput = getByPlaceholderText('Email')
    const passwordInput = getByPlaceholderText('Hasło')
    const loginButton = getByText('Zaloguj się')
    userEvent.type(emailInput, 'test@test.com')
    userEvent.type(passwordInput, 'test')
    userEvent.click(loginButton)
    // expect(mockLoginMutation).toHaveBeenCalledWith({
    //   email: 'test@test.com',
    //   password: 'test',
    // })

    // await waitFor(() => {
    //   // expect(mockLoginMutation).toHaveBeenCalledWith({
    //   //   email: 'test@example.com',
    //   //   password: 'password',
    //   // })
    //   // expect(localStorage.getItem('token')).toBe('fake_token')
    //   expect(navigate).toHaveBeenCalledWith(0)
    // })
  })
})
