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
  gap: 10px;
`

export const StyledIconBorder = styled(IconBorder)`
  /* box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.03); */
  padding: 9px 15px;
  height: 39px;
  border: 1px solid ${({ theme }) => theme.colors.postBorder};
  background: ${({ theme }) => theme.colors.secondaryBg};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 600;
  border-radius: 9px;

  &:focus-visible {
    fill: 2px solid ${({ theme }) => theme.colors.iconPlusBg};
  }

  & > svg,
  & > svg > path {
    margin-right: 5px;
    pointer-events: none;
    fill: ${({ theme }) => theme.colors.text};
    stroke: none;
  }
`
