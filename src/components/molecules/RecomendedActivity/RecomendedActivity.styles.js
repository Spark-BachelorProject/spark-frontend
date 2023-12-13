import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;

  gap: 0.5rem;
  padding: 12px 20px;
  margin: -5px 0 -5px -20px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.modalBg};
    transition: 200ms ease-in-out;
  }
`
