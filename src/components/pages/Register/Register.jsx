import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'

import { registerSchema } from '@/assets/schemas/registerSchema'
import { Button } from '@/components/atoms/Button/Button.styles'
import { DividerLabel } from '@/components/atoms/DividerLabel/DividerLabel.styles'
import { Input } from '@/components/atoms/Input/Input.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
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
      <Input placeholder="Email" type="email" {...register('email')} />
      <p>{errors.email?.message}</p>
      <Input placeholder="Imię" type="text" {...register('firstName')} />
      <p>{errors.firstName?.message}</p>
      <Input placeholder="Nazwisko" type="text" {...register('lastName')} />
      <p>{errors.lastName?.message}</p>
      <Input placeholder="Hasło" type="password" {...register('password')} />
      <p>{errors.password?.message}</p>
      <Input placeholder="Powtórz hasło" type="password" {...register('repeatedPassword')} />
      <p>{errors.repeatedPassword?.message}</p>

      <Button isBig type="sumbit">
        Zaloguj się
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
