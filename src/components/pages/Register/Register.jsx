import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/atoms/Button/Button.styles'
import { DividerLabel } from '@/components/atoms/DividerLabel/DividerLabel.styles'
import { Input } from '@/components/atoms/Input/Input.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import useGoogleLogin from '@/hooks/useGoogleLogin'

import { Form } from './Register.styles'

const Register = () => {
  const { GoogleLogin } = useGoogleLogin()

  return (
    <Form action="post">
      <Input placeholder="Email" type="email" />
      <Input placeholder="Imię" type="text" />
      <Input placeholder="Nazwisko" type="text" />
      <Input placeholder="Hasło" type="password" />
      <Input placeholder="Powtórz hasło" type="password" />

      <Button isBig>Zaloguj się</Button>
      <DividerLabel>Zaloguj się przy użyciu</DividerLabel>
      <GoogleLogin />
      <Text as={Link} to={'/login'} className="logintext">
        Masz już konto? <b>Zaloguj się</b>
      </Text>
    </Form>
  )
}

export default Register
