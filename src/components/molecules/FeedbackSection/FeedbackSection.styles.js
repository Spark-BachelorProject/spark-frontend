import styled from 'styled-components'

import { Button } from '@/components/atoms/Buttons/Button.styles'
import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`

export const StyledButton = styled(Button)`
  margin-top: 15px;
  background-color: ${({ theme }) => theme.colors.primaryBg};
`

export const StyledText = styled(Text)`
      font-size: ${({ theme }) => theme.fontSize.s};
`
