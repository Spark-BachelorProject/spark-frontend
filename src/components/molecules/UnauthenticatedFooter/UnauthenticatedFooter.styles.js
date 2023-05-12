import styled from 'styled-components'

export const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
`
