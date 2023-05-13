import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/atoms/Button/Button.styles'
import { DividerLabel } from '@/components/atoms/DividerLabel/DividerLabel.styles'
import { Input } from '@/components/atoms/Input/Input.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import useGoogleLogin from '@/hooks/useGoogleLogin'

import { Form } from './Login.styles'

const Login = () => {
  const { GoogleLogin } = useGoogleLogin()

  return (
    <Form action="post">
      <Input placeholder="Email" type="text" />
      <Input placeholder="Hasło" type="password" />

      <Text as={Link} className="problems">
        Problemy z logowaniem?
      </Text>
      <Button isBig>Zaloguj się</Button>
      <DividerLabel>Zaloguj się przy użyciu</DividerLabel>
      <GoogleLogin />
      <Text as={Link} to={'/register'} className="registertext">
        Nie masz konta? <b>Zarejestruj się</b>
      </Text>
    </Form>
  )
}

export default Login
