import styled from 'styled-components'

export const Wrapper = styled.nav`
  flex: 1 0 250px; //inital width
  max-width: 330px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  padding: 0 20px;
  opacity: 0.4;

  //this is done so its able to be displayed with 230px width ->  width of the post (684px) + gap (44px) + min navbar width (250px)
  @media screen and (max-width: 978px) {
    display: none;
  }
`
