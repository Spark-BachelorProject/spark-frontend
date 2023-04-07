import styled from 'styled-components'
import { IconBorder } from '@/components/atoms/IconBorder/IconBorder.styles'

export const Wrapper = styled.div`
  height: auto;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
`

export const ButtonsWrapper = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakPoints.m}) {
    width: 500px;
  }
`

export const SelectButtonsWrapper = styled.div`
  display: flex;
`

export const StyledIconBorder = styled(IconBorder)`
  padding: 9px 10px;
  height: 35px;
  background: ${({ theme }) => theme.colors.secondaryBg};
  border: 2px solid ${({ theme }) => theme.colors.buttonBorder};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.iconPlusBg};
  }

  & > svg,
  & > svg > path {
    pointer-events: none;
  }

  & > svg > path {
    padding: 0 3px;
  }
`
