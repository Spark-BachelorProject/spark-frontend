import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1 0 270px; //inital width
  max-width: 330px;
  height: calc(100vh - 70px);
  padding: 20px;
  position: sticky;
  top: 70px;

  //this is done so its able to be displayed with 270px width ->  width of the post (684px) + gap (44px) + min navbar width (270px)
  @media screen and (max-width: 998px) {
    display: none;
  }
`
