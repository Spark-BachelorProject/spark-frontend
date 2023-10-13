import styled from 'styled-components'

import { Button } from '@/components/atoms/Button/Button.styles'

export const Wrapper = styled.div`
  margin-top: 60px;
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
