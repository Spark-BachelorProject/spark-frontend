import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'

import { registerSchema } from '@/assets/schemas/registerSchema'
import { Alert } from '@/components/atoms/Alert/Alert'
import { Button } from '@/components/atoms/Buttons/Button.styles'
import { DividerLabel } from '@/components/atoms/DividerLabel/DividerLabel.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import UnauthenticatedInputWithLabel from '@/components/molecules/UnauthenticatedInputWithLabel/UnauthenticatedInputWithLabel'
import useGoogleLogin from '@/hooks/useGoogleLogin'
import { useRegisterMutation } from '@/store/api/auth'

import { Form, StyledError } from './Register.styles'

const Register = () => {
  const { GoogleLogin } = useGoogleLogin()
  const [validData] = useState(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) })
  const [signUp, { error }] = useRegisterMutation()

  const onSubmit = async (data) => {
    try {
      const response = await signUp(data).unwrap()

      if (!!response) {
        localStorage.setItem('token', response.token)
        navigate(0)
      } else {
        console.log('Error in onSubmit')
      }
    } catch (error) {
      // Error is automaticly handled by RTK Query
    }
  }

  // #TODO: Add alert when user is created with Google
  return (
    <>
      {validData && <Alert message="Użytkownik dodany!" />}
      <Form action="post" onSubmit={handleSubmit(onSubmit)}>
        <UnauthenticatedInputWithLabel
          placeholder="Email"
          id="email"
          name="email"
          labelText="Email"
          type="email"
          {...register('email')}
          error={errors?.email?.message}
        />
        <UnauthenticatedInputWithLabel
          placeholder="Imię"
          id="firstName"
          name="firstName"
          labelText="Imię"
          type="text"
          {...register('firstName')}
          error={errors?.firstName?.message}
        />
        <UnauthenticatedInputWithLabel
          placeholder="Nazwisko"
          id="lastName"
          name="lastName"
          labelText="Nazwisko"
          type="text"
          {...register('lastName')}
          error={errors?.lastName?.message}
        />
        <UnauthenticatedInputWithLabel
          placeholder="Hasło"
          id="password"
          name="password"
          labelText="Hasło"
          type="password"
          {...register('password')}
          error={errors?.password?.message}
        />
        <UnauthenticatedInputWithLabel
          placeholder="Powtórz hasło"
          id="repeatedPassword"
          name="repeatedPassword"
          labelText="Powtórz hasło"
          type="password"
          {...register('repeatedPassword')}
          error={errors?.repeatedPassword?.message}
        />
        {!!error?.data?.error && (
          <StyledError>
            Coś poszło nie tak - możliwe, że na ten e-mail jest już założone konto
          </StyledError>
        )}
        <Button isBig type="sumbit">
          Zarejestruj się
        </Button>
        <DividerLabel>Zaloguj się przy użyciu</DividerLabel>
        <GoogleLogin />
        <Text as={Link} to={'/login'} className="logintext">
          Masz już konto? <b>Zaloguj się</b>
        </Text>
      </Form>
    </>
  )
}

export default Register
