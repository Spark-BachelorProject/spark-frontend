import styled from 'styled-components'

import { Button } from '@/components/atoms/Buttons/Button.styles'
import Tags from '@/components/atoms/Tags/Tags'
import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 7px;
  display: flex;
  padding: 15px 10px;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 25px;
  position: relative;

  & > div {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  ${Text} {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.placeholder};
    width: 100%;
  }

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.divider};
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const IconBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.iconBg};
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

export const Content = styled.div`
  ${Text} {
    display: block;
    width: 100%;
    line-height: 1.8;
  }
`

export const StyledTags = styled(Tags)`
  margin-top: 5px;
  & > ${Button} {
    background-color: rgba(59, 130, 246, 0.21);
  }
`
