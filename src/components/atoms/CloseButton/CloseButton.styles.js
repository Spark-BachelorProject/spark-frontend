import styled from 'styled-components'

import { ReactComponent as CloseIcon } from '@/assets/icons/x.svg'

export const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 15px;
  height: 15px;
  cursor: pointer;
  border-radius: 2px;

  & > path {
    stroke: ${({ theme }) => theme.colors.placeholder};
  }

  :hover > path {
    stroke: ${({ theme }) => theme.colors.text};
    transition: 0.05s ease-in-out;
  }
`
