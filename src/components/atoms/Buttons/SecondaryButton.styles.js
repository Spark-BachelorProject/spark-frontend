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
  padding: 18px 20px;
  max-height: 35px;
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
`
