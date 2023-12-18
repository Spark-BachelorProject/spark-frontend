import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > select {
    background-color: ${({ theme }) => theme.colors.inputBg};
    margin: 0;
    border-radius: 7px;
    color: ${({ theme }) => theme.colors.inputFont};
  }
`
