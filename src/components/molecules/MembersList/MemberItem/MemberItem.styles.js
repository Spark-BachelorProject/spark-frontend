import styled from 'styled-components'

export const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding: 5px 2px;
  border-radius: 5px;
  transition: 0.2s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.navbarBorder};
  }
`
