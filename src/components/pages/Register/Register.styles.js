import styled from 'styled-components'

import { Button } from '@/components/atoms/Buttons/Button.styles'
import { DividerLabel } from '@/components/atoms/DividerLabel/DividerLabel.styles'
import { Text } from '@/components/atoms/Text/Text.styles'

export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  padding: 25px 20px;
  margin: 30px 0 80px;
  max-width: 440px;
  border-radius: 7px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

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
    margin: 0 0 80px;
  }
`

export const StyledError = styled(Error)`
  margin: 0 auto;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.m};
`
