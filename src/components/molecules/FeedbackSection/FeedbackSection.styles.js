import styled from 'styled-components'

import { Button } from '@/components/atoms/Buttons/Button.styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`

export const StyledButton = styled(Button)`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fontSize.sPlus};
  opacity: 0.8;
  background-color: ${({ theme }) => theme.fontSize.accent};
  color: ${({ theme }) => theme.colors.white};
`
