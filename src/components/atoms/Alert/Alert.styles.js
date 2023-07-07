import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  top: 2em;
  width: auto;
  padding: 0 2em;
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
