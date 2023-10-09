import styled from 'styled-components'

import { IconBorder } from '@/components/atoms/IconBorder/IconBorder.styles'

export const Wrapper = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
`

export const ButtonsWrapper = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
`

export const SelectButtonsWrapper = styled.div`
  display: flex;
`

export const StyledIconBorder = styled(IconBorder)`
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.03);
  padding: 9px 10px;
  height: 35px;
  background: ${({ theme }) => theme.colors.secondaryBg};
  border: 2px solid ${({ theme }) => theme.colors.selectBorder};

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
