import styled from 'styled-components'

import { Button } from '@/components/atoms/Buttons/Button.styles'
import { DividerLabel } from '@/components/atoms/DividerLabel/DividerLabel.styles'
import { Error } from '@/components/atoms/Error/Error.styles'
import { Text } from '@/components/atoms/Text/Text.styles'

export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border: 1px solid ${({ theme }) => theme.colors.postBorder};
  padding: 25px 20px;
  margin-top: 15px;
  margin-bottom: 60px;
  max-width: 440px;
  border-radius: 7px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${Text}.problems {
    margin: 10px auto 0 0;
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

  ${Text}.registertext {
    margin-top: 15px;
    & > b {
      margin-left: 3px;
    }
  }

  @media (max-width: 998px) {
    flex-direction: column;
  }
`

export const StyledError = styled(Error)`
  margin: 0.5rem 0 0 0;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.m};
`
