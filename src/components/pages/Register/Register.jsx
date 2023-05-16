import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'

import { registerSchema } from '@/assets/schemas/registerSchema'
import { Button } from '@/components/atoms/Button/Button.styles'
import { DividerLabel } from '@/components/atoms/DividerLabel/DividerLabel.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import LoginInput from '@/components/molecules/LoginInput/LoginInput'
import useGoogleLogin from '@/hooks/useGoogleLogin'

import { Form } from './Register.styles'

const Register = () => {
  const { GoogleLogin } = useGoogleLogin()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) })

  const onSubmit = (data) => console.log(data, errors)

  return (
    <Form action="post" onSubmit={handleSubmit(onSubmit)}>
      <LoginInput
        placeholder="Email"
        type="email"
        {...register('email')}
        error={errors?.email?.message}
      />
      <LoginInput
        placeholder="Imię"
        type="text"
        {...register('firstName')}
        error={errors?.firstName?.message}
      />
      <LoginInput
        placeholder="Nazwisko"
        type="text"
        {...register('lastName')}
        error={errors?.lastName?.message}
      />
      <LoginInput
        placeholder="Hasło"
        type="password"
        {...register('password')}
        error={errors?.password?.message}
      />
      <LoginInput
        placeholder="Powtórz hasło"
        type="password"
        {...register('repeatedPassword')}
        error={errors?.repeatedPassword?.message}
      />

      <Button isBig type="sumbit">
        Zarejestruj się
      </Button>
      <DividerLabel>Zaloguj się przy użyciu</DividerLabel>
      <GoogleLogin />
      <Text as={Link} to={'/login'} className="logintext">
        Masz już konto? <b>Zaloguj się</b>
      </Text>
    </Form>
  )
}

export default Register
