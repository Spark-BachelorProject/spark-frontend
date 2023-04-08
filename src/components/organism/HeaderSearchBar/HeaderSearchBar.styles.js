import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 70px;
  position: fixed;
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
    width: 3000px;
    padding: 0 20px;
  }
`

export const LogoAndInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const InnerIconsWrapperRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 16px 0;
  height: 38px;
`
