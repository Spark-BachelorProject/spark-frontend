import styled from 'styled-components'

import { Button } from '@/components/atoms/Button/Button.styles'

export const StyledButton = styled(Button)`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.iconBg};
  border: 1px solid #3b82f640;

  font-size: ${({ theme }) => theme.fontSize.sPlus};
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.colors.accent};
  margin: 12px 12px 0px 0;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.navbarBorder};
  }

  & > svg > path {
    stroke: ${({ theme }) => theme.colors.accent};
  }
`
