import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -10px;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;

  & > div {
    display: flex;
    gap: 10px;
    flex-direction: row;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.modalBg};
    transition: 200ms ease-in-out;
  }
`
