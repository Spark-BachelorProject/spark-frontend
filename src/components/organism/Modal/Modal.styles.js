import styled from 'styled-components'

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 244px;
  height: 380px;
  background-color: ${({ theme }) => theme.colors.white};
  /* border: 1px solid ${({ theme }) => theme.colors.modalBorder}; */
  border: 1px solid black;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5px;
`
