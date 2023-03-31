import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  z-index: 999;

  height: 70px;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  padding: 0 20px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.navbarBorder};
`

export const InnerWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakPoints.mobile};
  display: flex;
  margin: 16px auto;
  height: 38px;
  align-items: center;
  justify-content: space-between;
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

export const Divider = styled.div`
  border-left: solid 1px ${({ theme }) => theme.colors.divider};
  height: 22px;
  margin: 0 15px;
`
