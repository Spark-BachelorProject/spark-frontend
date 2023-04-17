import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  z-index: 999;

  height: 70px;
  position: sticky;
  top: 0;

  background-color: ${({ theme }) => theme.colors.secondaryBg};
  padding: 0 20px;
  display: flex;
  border-bottom: 3px solid ${({ theme }) => theme.colors.modalBorder};
`

export const InnerWrapper = styled.div`
  display: flex;
  margin: 16px auto;
  height: 38px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakPoints.m}) {
    width: 650px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.m}) {
    width: 100%;
    padding: 0 20px;
  }
`

export const LogoAndInputWrapper = styled.div`
  display: flex;
  flex-basis: 80%;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: ${({ theme }) => theme.breakPoints.m}) {
    & > div {
      position: absolute;
      left: 50vw;
      width: 45%;
      transform: translateX(-50%);
    }
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.l}) {
    & > div {
      width: 55%;
      max-width: 684px;
    }
  }
`

export const InnerIconsWrapperRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 16px 0;
  height: 38px;
`
