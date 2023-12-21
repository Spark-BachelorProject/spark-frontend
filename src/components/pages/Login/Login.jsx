import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'

import { loginSchema } from '@/assets/schemas/loginSchema'
import { Button } from '@/components/atoms/Buttons/Button.styles'
import { DividerLabel } from '@/components/atoms/DividerLabel/DividerLabel.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import UnauthenticatedInputWithLabel from '@/components/molecules/UnauthenticatedInputWithLabel/UnauthenticatedInputWithLabel'
import useGoogleLogin from '@/hooks/useGoogleLogin'
import { useLoginMutation } from '@/store/api/auth'

import { Form, StyledError } from './Login.styles'

//FIXME: handle in other way if user logged in, than navigate
const Login = () => {
  const { GoogleLogin } = useGoogleLogin()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) })
  const [login, { isError }] = useLoginMutation()
  const navigate = useNavigate()

  // redirect to home page after successful login
  const onSubmit = async (data) => {
    try {
      const { data: responseData } = await login(data)

      console.log(responseData)
      localStorage.setItem('token', responseData.token)
      navigate(0)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form action="post" onSubmit={handleSubmit(onSubmit)} data-testid="form">
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
        placeholder="Hasło"
        id="password"
        name="password"
        labelText="Hasło"
        type="password"
        {...register('password')}
        error={errors?.password?.message}
      />
      {isError && <StyledError>Błędny login lub hasło</StyledError>}

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
