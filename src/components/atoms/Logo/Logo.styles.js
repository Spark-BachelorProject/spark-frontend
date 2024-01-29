import styled from 'styled-components'

import { ReactComponent as LogoIcon } from '@/assets/icons/logo.svg'

export const StyledLogoIcon = styled(LogoIcon)`
  max-width: 80px;
  height: auto;

  & > path {
    fill: ${({ theme }) => theme.colors.titleFont};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.m}) {
    max-width: 70px;
  }
`
