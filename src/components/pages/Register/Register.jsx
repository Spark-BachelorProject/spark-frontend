import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'

import { registerSchema } from '@/assets/schemas/registerSchema'
import { Alert } from '@/components/atoms/Alert/Alert'
import { Button } from '@/components/atoms/Button/Button.styles'
import { DividerLabel } from '@/components/atoms/DividerLabel/DividerLabel.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import LoginInput from '@/components/molecules/LoginInput/LoginInput'
import useGoogleLogin from '@/hooks/useGoogleLogin'

import { Form } from './Register.styles'

const Register = () => {
  const { GoogleLogin } = useGoogleLogin()
  const [validData, setValidData] = React.useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) })

  const onSubmit = (data) => {
    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    }

    console.log(userData)

    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8080/api/v1/auth/register', userData)
        setValidData(true)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }

  // #TODO: Add alert when user is created with Google
  // #TODO: Add redirect to login page after successful registration

  return (
    <>
      {validData && <Alert message="Użytkownik dodany!" />}
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
    </>
  )
}

export default Register
