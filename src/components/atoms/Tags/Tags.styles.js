import styled from 'styled-components'

import { Button } from '../Buttons/Button.styles'

export const StyledTags = styled.div`
  margin: 15px 0 10px 0;

  ${Button} {
    padding: 9px 14px;
    background-color: ${({ theme }) => theme.colors.tagBg};

    /* border: 1px solid ${({ theme }) => theme.colors.tagBorder}; */
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
