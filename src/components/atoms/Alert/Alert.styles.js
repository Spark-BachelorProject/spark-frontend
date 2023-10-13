import styled from 'styled-components'

//TODO: fix z-index (right now the attending list is on top of the alert)

export const Wrapper = styled.div`
  position: fixed;
  z-index: 9999;
  bottom: 2em;
  left: 35%;
  width: auto;
  padding: 1.5em 2.5em;
  background-color: ${({ theme }) => theme.colors.accent};
  text-align: center;
  border-radius: 4px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2em;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
`
