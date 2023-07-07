import styled from 'styled-components'

import { Button } from '@/components/atoms/Button/Button.styles'
import { DividerLabel } from '@/components/atoms/DividerLabel/DividerLabel.styles'
import { Input } from '@/components/atoms/Input/Input.styles'
import { Text } from '@/components/atoms/Text/Text.styles'

export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  padding: 25px 20px;
  margin-bottom: 50px;
  max-width: 440px;
  border-radius: 7px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${Input} {
    margin-bottom: 15px;
  }

  ${Button} {
    margin-top: 30px;
    width: 100%;
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

  ${Text}.logintext {
    margin-top: 15px;
    & > b {
      margin-left: 3px;
    }
  }

  @media (max-width: 998px) {
    flex-direction: column;
  }
`
