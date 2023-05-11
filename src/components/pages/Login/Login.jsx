import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { Button } from '@/components/atoms/Button/Button.styles'
import { DividerLabel } from '@/components/atoms/DividerLabel/DividerLabel.styles'
import { Input } from '@/components/atoms/Input/Input.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import UnauthenticatedContent from '@/components/templates/UnauthenticatedContent/UnauthenticatedContent'

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 7px;
  padding: 25px 20px;
`
export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${Input} {
    margin-bottom: 15px;
  }

  ${Text}.problems {
    margin: 10px auto 0 0;
  }

  ${Button} {
    margin-top: 30px;
  }

  ${DividerLabel} {
    color: ${({ theme }) => theme.colors.placeholder};
    margin: 20px auto;
    width: 60%;

    &::after,
    &::before {
      background-color: ${({ theme }) => theme.colors.placeholder};
    }
  }

  ${Text}.registertext {
    & > b {
      margin-left: 3px;
    }
  }
`

// TODO: enable Link to move somewhere
const Login = () => {
  return (
    <UnauthenticatedContent>
      <Wrapper>
        <Form action="post">
          <Input placeholder="Email" type="text" />
          <Input placeholder="Hasło" type="password" />

          <Text as={Link} className="problems">
            Problemy z logowaniem?
          </Text>
          <Button isBig>Zaloguj się</Button>
          <DividerLabel>Zaloguj się przy użyciu</DividerLabel>
          {/* Place for google button */}
          <Text as={Link} to={'/register'} className="registertext">
            Nie masz konta? <b>Zarejestruj się</b>
          </Text>
        </Form>
      </Wrapper>
    </UnauthenticatedContent>
  )
}

export default Login
