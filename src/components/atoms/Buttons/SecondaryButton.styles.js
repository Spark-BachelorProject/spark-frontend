import styled from 'styled-components'

import { Button } from './Button.styles'

export const SecondaryButton = styled(Button).attrs((props) => ({
  isFilled: props.isFilled,
}))`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: ${({ theme, isFilled }) => (isFilled ? theme.colors.white : theme.colors.accent)};
  font-weight: 500;
  padding: 11px 22px;
  background-color: ${({ theme, isFilled }) =>
    isFilled ? theme.colors.accent : theme.colors.tagBg};
  border: 1px solid ${({ theme }) => theme.colors.tagBg};
  transition: 200ms ease-out;

  & > svg > path {
    stroke: ${({ theme }) => theme.colors.accent};
  }

  &:hover {
    & > svg > path {
      stroke: ${({ theme }) => theme.colors.white};
    }
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.buttonDisabled};
    color: ${({ theme }) => theme.colors.placeholder};

    & > svg > path {
      stroke: ${({ theme }) => theme.colors.accent};
    }
  }
`
