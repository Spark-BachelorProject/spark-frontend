import styled from 'styled-components'

import { Button } from '../Button/Button.styles'

export const StyledTags = styled.div`
  margin: 15px 0 0 0;

  ${Button} {
    padding: 7px 14px;
    background-color: rgba(59, 130, 246, 0.21);

    border: 1px solid ${({ theme }) => theme.colors.accent};
    font-size: ${({ theme }) => theme.fontSize.sPlus};

    color: ${({ theme }) => theme.colors.labelFont};
    margin: 12px 12px 0px 0;
    font-weight: 500;
  }

  /* ${Button}:hover {
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.navbarBorder};
  } */
`
