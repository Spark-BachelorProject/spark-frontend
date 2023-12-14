import styled from 'styled-components'

import { ReactComponent as CloseIcon } from '@/assets/icons/x.svg'

export const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 30px;
  right: 20px;
  height: 20px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.inputBg};
  border-radius: 2px;
  transition: background-color 0.2s ease-out;
  :hover {
    background-color: ${({ theme }) => theme.colors.buttonBg};
  }
`
