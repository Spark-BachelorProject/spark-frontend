import styled from 'styled-components'

import { Button } from '@/components/atoms/Buttons/Button.styles'

export const PopupWrapper = styled.div`
  box-shadow: ${({ theme }) => theme.colors.popupShadow};
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'absolute')};
  z-index: ${({ popupNum }) => 1000 + popupNum * 1 + 1};
  top: ${({ position: { y } }) => `${y}px`};
  left: ${({ position: { x } }) => `${x}px`};

  transform: ${({ position: { positioning } }) =>
    positioning === 'right'
      ? 'translateX(-85%)'
      : positioning === 'left'
      ? 'translateX(-15%)'
      : 'translateX(-50%)'};

  transform: ${({ isShifted }) => (isShifted ? 'translateX(-81%)' : '')};
  height: auto;
  background-color: ${({ theme }) => theme.colors.modalBg};
  border: 1px solid ${({ theme }) => theme.colors.modalBorder};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${({ hasNoPadding }) => (hasNoPadding ? '' : '20px 0px')};

  ${Button} {
    margin-top: 20px;
  }
`

export const PopupBackground = styled.div`
  position: fixed;
  z-index: ${({ popupNum }) => 1000 + popupNum};
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`
