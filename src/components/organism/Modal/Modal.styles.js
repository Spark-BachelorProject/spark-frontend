import styled from 'styled-components'

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 425px;
  background-color: ${({ theme }) => theme.colors.modalBg};
  border: 2px solid ${({ theme }) => theme.colors.modalBorder};
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
`
