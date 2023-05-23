import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  margin: 0 0 100px 0;
  padding-top: 35px; // ITS SHOULD BE PADDING, CUZ MODAL DOESN'T SHOW IN PROPER WAY

  //684px so the GroupTemplate doesnt move to the left when the width exceedes the width of the post
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
    gap: 30px;
  }
`

export const GroupWrapper = styled.div`
  margin: 0 10px;
  max-width: 684px;

  @media screen and (min-width: 684px) {
    width: 100%;
  }
`

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.l}) {
    display: none;
  }
`
