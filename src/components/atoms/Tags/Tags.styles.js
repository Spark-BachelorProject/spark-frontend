import styled from 'styled-components'

import { Button } from '../Buttons/Button.styles'

export const StyledTags = styled.div`
  margin: 20px 0 10px 0;

  ${Button} {
    cursor: inherit;
    padding: 5px 10px;
    background-color: ${({ theme }) => theme.colors.iconBg};
    border: 1px solid ${({ theme }) => theme.colors.divider};
    border-radius: 6px;
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.text};
    margin: 10px 10px 0px 0;
    font-weight: 500;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.accent};
      transition: all 0.1s ease-in-out;
      cursor: pointer;
    }
  }

  /* ${Button}:hover {
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.navbarBorder};
  } */
`
