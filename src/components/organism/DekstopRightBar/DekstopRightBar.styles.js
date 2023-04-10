import styled from 'styled-components'

export const Wrapper = styled.div`
  flex: 1 0 250px; //inital width
  max-width: 330px;
  height: calc(100vh - 70px);
  padding: 20px 20px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.l}) {
    display: none;
  }
`

export const Container = styled.div`
  height: 220px;
  width: auto;
  margin-bottom: 20px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
`

export const SmallContainer = styled(Container)`
  height: 180px;
`

export const HighContainer = styled(Container)`
  height: 287px;
`
