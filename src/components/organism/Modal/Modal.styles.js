import styled from 'styled-components'
import { Button } from '@/components/atoms/Button/Button.styles'

//TODO: Make double Modals escapable (as for now you have to click outside the outer one)

export const ModalWrapper = styled.div`
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  position: fixed;
  z-index: ${({ modalNum }) => 1000 + modalNum * 1 + 1};
  top: ${({ position: { y } }) => `${y + 9}px`};
  left: ${({ position: { x } }) => `${x}px`};

  transform: ${({ position: { positioning } }) =>
    positioning === 'right'
      ? 'translateX(-85%)'
      : positioning === 'left'
      ? 'translateX(-15%)'
      : 'translateX(-50%)'};

  width: ${({ width }) => (width === 'big' ? '330px' : width === 'medium' ? '280px' : '260px')};
  height: auto;
  max-height: 500px;
  background-color: ${({ theme }) => theme.colors.modalBg};
  border: 2px solid ${({ theme }) => theme.colors.modalBorder};
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;

  ${Button} {
    margin-top: 20px;
  }

  //top triangle
  &::before {
    content: '';
    position: absolute;
    top: -10px;

    //TODO: Think this through as this is not working XD
    left: ${({ position: { positioning } }) =>
      positioning === 'right' ? '92.5%' : positioning === 'left' ? '7.5%' : '57%'};

    transform: translateX(-50%);
    border-left: 17px solid transparent;
    border-right: 17px solid transparent;
    border-bottom: 10px solid ${({ theme }) => theme.colors.popupTriangle};
  }
`

export const ModalBackground = styled.div`
  position: fixed;
  z-index: ${({ modalNum }) => 1000 + modalNum};
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  // FIXME: background-color is necessary?
  background-color: rgba(0, 0, 0, 0);
`
