import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/atoms/Button/Button.styles'
import { DividerLabel } from '@/components/atoms/DividerLabel/DividerLabel.styles'
import { Input } from '@/components/atoms/Input/Input.styles'
import { Text } from '@/components/atoms/Text/Text.styles'

import { Form } from './Register.styles'

const Register = () => {
  return (
    <Form action="post">
      <Input placeholder="Email" type="text" />
      <Input placeholder="Imię i nazwisko" type="text" />
      <Input placeholder="Hasło" type="password" />
      <Input placeholder="Powtórz hasło" type="password" />

      <Button isBig>Zaloguj się</Button>
      <DividerLabel>Zaloguj się przy użyciu</DividerLabel>
      {/* Place for google button */}
      <Text as={Link} to={'/login'} className="logintext">
        Masz już konto? <b>Zaloguj się</b>
      </Text>
    </Form>
  )
}

export default Register
