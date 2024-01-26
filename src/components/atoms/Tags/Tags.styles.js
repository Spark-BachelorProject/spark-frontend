import styled from 'styled-components'

import { Button } from '../Buttons/Button.styles'

export const StyledTags = styled.div`
  margin: 15px 0 10px 0;

  ${Button} {
    cursor: inherit;
    padding: 7px 14px;
    background-color: ${({ theme }) => theme.colors.tagBg};
    border: 1.5px solid ${({ theme }) => theme.colors.tagBg};

    border-radius: 20px;
    font-size: ${({ theme }) => theme.fontSize.sPlus};

    color: ${({ theme }) => theme.colors.accent};
    margin: 12px 12px 0px 0;
    font-weight: 500;
  }

  /* ${Button}:hover {
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.navbarBorder};
  } */
`
