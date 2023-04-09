import styled from 'styled-components'

export const Wrapper = styled.div`
  flex: 1 0 250px; //inital width
  max-width: 330px;
  height: calc(100vh - 70px);

  background-color: ${({ theme }) => theme.colors.secondaryBg};
  padding: 0 20px;
  opacity: 0.4;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.l}) {
    display: none;
  }
`
