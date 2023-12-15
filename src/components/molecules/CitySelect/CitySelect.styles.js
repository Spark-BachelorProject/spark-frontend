import styled from 'styled-components'

import { Button } from '@/components/atoms/Buttons/Button.styles'
import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.div`
  padding: 0px 20px;
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: ${({ theme }) => theme.breakPoints.m}) {
    width: 100vw;
  }
`

export const StyledBlueText = styled(Text)`
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
`

export const StyledButton = styled(Button)`
  margin-bottom: -25px;
`
