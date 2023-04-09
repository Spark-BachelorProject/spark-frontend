import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;

  //684px so the pageContent doesnt move to the left when the width exceedes the width of the post
  @media screen and (min-width: 684px) {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 684px) and (max-width: ${({ theme }) => theme.breakPoints.l}) {
    display: flex;
    justify-content: center;
    gap: 44px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.l}) {
    display: flex;
    justify-content: center;
    gap: 44px;
  }
`

export const InnerWrapper = styled.div`
  max-width: 684px;
`
