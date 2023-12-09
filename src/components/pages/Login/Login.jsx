import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'

import { loginSchema } from '@/assets/schemas/loginSchema'
import { Button } from '@/components/atoms/Button/Button.styles'
import { DividerLabel } from '@/components/atoms/DividerLabel/DividerLabel.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import LoginInput from '@/components/molecules/LoginInput/LoginInput'
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

  // TODO: Handle error

  return (
    <>
      {/* {validData && <Alert message="Użytkownik zalogowany!" />} */}
      <Form action="post" onSubmit={handleSubmit(onSubmit)} data-testid="form">
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
    </>
  )
}

export default Login
