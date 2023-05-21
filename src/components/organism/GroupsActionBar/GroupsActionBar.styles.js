import styled from 'styled-components'

import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg'
import { Button } from '@/components/atoms/Button/Button.styles'
import { IconBorder } from '@/components/atoms/IconBorder/IconBorder.styles'
import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const IconAndLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  & > div {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  ${Text} {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.placeholder};
  }
`

export const IconBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  & > svg > path {
    stroke: ${({ theme }) => theme.colors.buttonBg};
  }
`

export const GroupsActionSection = styled.div`
  display: flex;

  ${Button} {
    margin-left: 10px;
  }
`

export const StyledIconBorder = styled(IconBorder)`
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

export const StyledSearchIcon = styled(SearchIcon)`
  & > path {
    fill: ${({ theme }) => theme.colors.iconSecondary};
  }
`
