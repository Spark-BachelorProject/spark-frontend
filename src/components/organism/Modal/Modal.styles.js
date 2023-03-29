import styled from 'styled-components'

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 475px;
  background-color: ${({ theme }) => theme.colors.modalBg};
  border: 2px solid ${({ theme }) => theme.colors.modalBorder};
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
`

export const ModalBackground = styled.div`
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`
