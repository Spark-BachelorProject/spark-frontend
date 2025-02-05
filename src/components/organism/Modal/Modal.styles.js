import styled from 'styled-components'

import { Button } from '@/components/atoms/Buttons/Button.styles'

export const ModalWrapper = styled.div`
  box-shadow: ${({ theme }) => theme.colors.modalShadow};
  overflow-y: auto;
  max-height: 95vh;
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'absolute')};
  z-index: ${({ modalNum }) => 2000 + modalNum * 1 + 1};
  ${({ isModal }) =>
    isModal &&
    `
      top: 50% !important;
      left: 50% !important;
      transform: translate(-50%, -50%) !important; 
  `}
  top: ${({ position: { y } }) => `${y}px`};
  left: ${({ position: { x } }) => `${x}px`};

  transform: ${({ position: { positioning } }) =>
    positioning === 'right'
      ? 'translateX(-85%)'
      : positioning === 'left'
      ? 'translateX(-15%)'
      : 'translateX(-50%)'};

  height: auto;
  /* max-height: 500px; */
  background-color: ${({ theme }) => theme.colors.modalBg};
  border: 1px solid ${({ theme }) => theme.colors.postBorder};
  border-radius: 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${({ hasNoPadding }) => (hasNoPadding ? '' : '20px 0px')};

  ${Button} {
    margin-top: 20px;
  }

  @media (max-width: 1000px) {
    max-height: 85vh;

    ${({ isModal }) =>
      isModal &&
      `
      top: 45% !important;
  `}
  }

  /* //top triangle
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: ${({ position: { positioning } }) =>
    positioning === 'right' ? '92.5%' : positioning === 'left' ? '7.5%' : '57%'};

    transform: translateX(-50%);
    border-left: 17px solid transparent;
    border-right: 17px solid transparent;
    border-bottom: 10px solid ${({ theme }) => theme.colors.popupTriangle};
  } */
`

export const ModalBackground = styled.div`
  position: fixed;
  cursor: pointer;
  z-index: ${({ modalNum }) => 2000 + modalNum};
  backdrop-filter: blur(3px);
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${({ hasBackgroundColor, theme }) =>
    hasBackgroundColor ? theme.colors.modalBehind : 'rgba(0, 0, 0, 0)'};
`
