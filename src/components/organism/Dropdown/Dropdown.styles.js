import styled from 'styled-components'

import { Button } from '@/components/atoms/Button/Button.styles'
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
  gap: 10px;
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

export const SecondaryButton = styled(Button)`
  display: flex;
  gap: 10px;
  align-items: center;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;
  max-height: 35px;
  background-color: ${({ theme }) => theme.colors.tagBg};
  border: 2px solid ${({ theme }) => theme.colors.tagBorder};

  & > svg > path {
    stroke: ${({ theme }) => theme.colors.accent};
  }

  &:hover {
    & > svg > path {
      stroke: ${({ theme }) => theme.colors.white};
    }
  }
`
