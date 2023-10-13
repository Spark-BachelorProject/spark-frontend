import styled from 'styled-components'

export const SuggestionWrapper = styled.ul`
  position: absolute;
  margin-top: 0.5em;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Suggestion = styled.li`
  cursor: pointer;
  z-index: 1;
  list-style: none;
  padding: 15px 10px;
  width: 45%;
  min-width: 240px;
  background-color: ${({ theme }) => theme.colors.inputBg};
  color: ${({ theme }) => theme.colors.inputFont};
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &:hover {
    transition: 200ms;
    background-color: ${({ theme }) => theme.colors.navbarBorder};
  }
`
