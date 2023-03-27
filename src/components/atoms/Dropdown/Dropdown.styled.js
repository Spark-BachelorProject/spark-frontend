import styled from 'styled-components'
import { IconBorder } from '@/components/organism/HeaderSearchBar/HeaderSearchBar.styles'

export const Wrapper = styled.div`
  height: auto;
  display: flex;
  padding: 0 20px;
  justify-content: center;
`

export const ButtonsWrapper = styled.div`
  width: ${({ theme }) => theme.breakPoints.mobile};
  display: flex;
  justify-content: space-between;
`

export const SelectButtonsWrapper = styled.div`
  display: flex;
`

export const Select = styled.select`
  height: 35px;
  width: auto;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.selectFont};
  padding: 5px 15px;
  margin-right: 5px;
  font-size: 13px;
  border: 2px solid ${({ theme }) => theme.colors.buttonBorder};
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.iconPlusBg};
  }

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px 0px;
  }
`

export const StyledIconBorder = styled(IconBorder)`
  padding: 9px 10px;
  height: 35px;
  background: ${({ theme }) => theme.colors.secondaryBg};
  border: 2px solid ${({ theme }) => theme.colors.buttonBorder};
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.iconPlusBg};
  }

  & > svg > path {
    padding: 0 3px;
  }
`
