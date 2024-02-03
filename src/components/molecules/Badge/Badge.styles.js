import styled from 'styled-components'

import { Button } from '@/components/atoms/Buttons/Button.styles'

//TODO: Fix padding issue
export const StyledButton = styled(Button)`
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  border-radius: 100px;
  align-items: center;
  font-size: 20px;

  margin: 10px 8px 0px 0;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainDivider};
    transition: 0.15s linear;
  }

  & > svg {
    height: 77px;
    width: 77px;
  }

  & > path {
    stroke: ${({ theme }) => theme.colors.accent};
  }
`
