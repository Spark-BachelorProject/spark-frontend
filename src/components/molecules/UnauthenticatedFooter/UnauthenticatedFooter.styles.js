import styled from 'styled-components'

export const Wrapper = styled.footer`
  width: 100vw;
  display: flex;
  justify-content: center;
  height: 50px;
  border-top: 1px solid ${({ theme }) => theme.colors.postBorder};
  background-color: ${({ theme }) => theme.colors.secondaryBg};

  @media (min-width: 998px) {
    position: fixed;
    z-index: 2;
    bottom: 0;
  }
`
