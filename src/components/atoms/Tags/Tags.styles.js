import styled from 'styled-components'

import { Button } from '../Buttons/Button.styles'

export const StyledTags = styled.div`
  margin: 20px 0 10px 0;

  ${Button} {
    cursor: inherit;
    padding: 5px 8px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.checkboxTick};
    border-radius: 6px;
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.text};
    margin: 10px 10px 0px 0;
    font-weight: 500;
  }

  /* ${Button}:hover {
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.navbarBorder};
  } */
`
