import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

export const SearchResults = styled.ul`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  z-index: 1000;
  padding: 10px;
  border-radius: 15px;
  list-style: none;
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 45px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.inputBg};

  @media (max-width: ${({ theme }) => theme.breakPoints.m}) {
    position: fixed;
    top: 61px;
    width: 100vw;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const SearchResultsItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.sPlus};
  font-weight: 600;
  color: ${({ theme, ishighlighted }) =>
    ishighlighted ? theme.colors.iconPrimaryActive : theme.colors.text};
  background-color: ${({ theme, ishighlighted }) =>
    ishighlighted ? theme.colors.modalBg : theme.colors.inputBg};
  width: 100%;
  padding: 5px;
  cursor: ${({ hasCursor }) => (hasCursor ? 'default' : 'pointer')};
  transition: background-color 0.2s ease-in-out;
  border-radius: 5px;
`
