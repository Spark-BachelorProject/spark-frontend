import styled from 'styled-components'

import { Alert } from '@/components/atoms/Alert/Alert'
import { Button } from '@/components/atoms/Button/Button.styles'

export const Wrapper = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`

export const StyledAlert = styled(Alert)`
  position: fixed;
  bottom: 2em;
  left: 35%;
`

export const StyledButton = styled(Button)`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fontSize.sPlus};
  opacity: 0.8;
  border: 2px solid ${({ theme }) => theme.colors.divider};
  color: ${({ theme }) => theme.colors.text};

  :hover {
    border: 2px solid ${({ theme }) => theme.colors.buttonBg};
  }
`
