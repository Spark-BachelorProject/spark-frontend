import styled from 'styled-components'

import { Button } from './Button.styles'

export const SecondaryButton = styled(Button).attrs((props) => ({
  isFilled: props.isFilled,
}))`
  display: flex;
  gap: 10px;
  align-items: center;
  color: ${({ theme, isFilled }) => (isFilled ? theme.colors.white : theme.colors.accent)};
  font-weight: 500;
  max-height: 35px;
  background-color: ${({ theme, isFilled }) => (isFilled ? theme.colors.accent : 'transparent')};
  border: 2px solid ${({ theme }) => theme.colors.tagBorder};
  transition: 200ms ease-out;

  & > svg > path {
    stroke: ${({ theme }) => theme.colors.accent};
  }

  &:hover {
    & > svg > path {
      stroke: ${({ theme }) => theme.colors.white};
    }
  }
`
