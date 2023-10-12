import styled from 'styled-components'

export const SuggestionWrapper = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
`

export const Suggestion = styled.li`
  z-index: 1;
  list-style: none;
  padding: 15px 10px;
  background-color: ${({ theme }) => theme.colors.inputBg};
  color: ${({ theme }) => theme.colors.inputFont};
  border: 1px solid ${({ theme }) => theme.colors.buttonBorder};

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`
