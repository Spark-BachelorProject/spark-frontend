import styled from 'styled-components'

import { Button } from '@/components/atoms/Buttons/Button.styles'
import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.div`
  padding: 0px 20px;
  width: 600px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: ${({ theme }) => theme.breakPoints.m}) {
    width: 100vw;
  }
`

export const StyledButton = styled(Button)`
  margin-bottom: -25px;
`

export const StyledText = styled(Text)`
  margin-top: -10px;
`

export const ActivitiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  margin-bottom: 15px;

  & > * {
    margin: -20px 0px;
  }
`

export const StyledBlueText = styled(Text)`
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
`
