import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  margin: 0 0 100px 0;
  padding-top: 35px; // ITS SHOULD BE PADDING, CUZ MODAL DOESN'T SHOW IN PROPER WAY

  //684px so the pageContent doesnt move to the left when the width exceedes the width of the post
  @media screen and (min-width: 684px) {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 684px) and (max-width: ${({ theme }) => theme.breakPoints.l}) {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.l}) {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
`

export const InnerWrapper = styled.div`
  margin: 0 10px;
  width: 100%;
  max-width: 684px;
`
