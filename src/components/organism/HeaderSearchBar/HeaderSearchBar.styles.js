import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 70px;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  padding: 0 20px;
  display: flex;
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

export const IconBorder = styled.div`
  border: solid 1px ${({ theme }) => theme.colors.buttonBorder};
  background-color: ${({ theme }) => theme.colors.iconBg};
  height: 39px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 13px;
  border-radius: 7px;
  margin-left: 10px;
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.iconPlusBg};
  }

  & > svg {
    cursor: pointer;
  }

  & > svg > path {
    stroke: ${({ theme }) => theme.colors.iconSecondary};
  }
`

export const Divider = styled.div`
  border-left: solid 1px ${({ theme }) => theme.colors.divider};
  height: 22px;
  margin: 0 15px;
`
