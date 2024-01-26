import styled from 'styled-components'

import { Button } from '../Buttons/Button.styles'

export const StyledTags = styled.div`
  margin: 15px 0 10px 0;

  ${Button} {
    cursor: inherit;
    padding: 5px 12px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.navbarBorder};

    border-radius: 20px;
    font-size: ${({ theme }) => theme.fontSize.s};

    color: ${({ theme }) => theme.colors.text};
    margin: 12px 12px 0px 0;
  }

  /* ${Button}:hover {
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.navbarBorder};
  } */
`
