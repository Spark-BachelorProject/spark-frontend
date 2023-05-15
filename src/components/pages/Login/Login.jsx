import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { loginSchema } from '@/assets/schemas/loginSchema'
import { Button } from '@/components/atoms/Button/Button.styles'
import { DividerLabel } from '@/components/atoms/DividerLabel/DividerLabel.styles'
import { Input } from '@/components/atoms/Input/Input.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import useGoogleLogin from '@/hooks/useGoogleLogin'

import { Form } from './Login.styles'

const Login = () => {
  const { GoogleLogin } = useGoogleLogin()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) })

  const onSubmit = (data) => console.log(data, errors)

  return (
    <Form action="post" onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Email" type="email" {...register('email')} />
      <p>{errors.email?.message}</p>
      <Input placeholder="Hasło" type="password" {...register('password')} />
      <p>{errors.password?.message}</p>

      <Text as={Link} className="problems">
        Problemy z logowaniem?
      </Text>
      <Button isBig type="sumbit">
        Zaloguj się
      </Button>
      <DividerLabel>Zaloguj się przy użyciu</DividerLabel>
      <GoogleLogin />
      <Text as={Link} to={'/register'} className="registertext">
        Nie masz konta? <b>Zarejestruj się</b>
      </Text>
    </Form>
  )
}

export default Login
