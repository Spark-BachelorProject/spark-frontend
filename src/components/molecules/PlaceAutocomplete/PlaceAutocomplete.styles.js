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
  position: relative;
  z-index: 100;
  list-style: none;
  padding: 15px 10px;
  margin: 0 -105% 0 0;
  min-width: 240px;
  background-color: ${({ theme }) => theme.colors.inputBg};
  color: ${({ theme }) => theme.colors.inputFont};
  border: 1px solid ${({ theme }) => theme.colors.navbarBorder};
  font-size: ${({ theme }) => theme.fontSize.sPlus};

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
