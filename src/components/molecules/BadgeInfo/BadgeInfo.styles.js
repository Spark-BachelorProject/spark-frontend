import styled from 'styled-components'

import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryBg};
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  max-width: 330px;
`

export const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.badgeHeader};
  display: flex;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding: 15px 20px;
  gap: 10px;

  & > svg > path {
    stroke: ${({ theme }) => theme.colors.textHeader};
  }
`

export const Content = styled.section`
  border: 2px solid ${({ theme }) => theme.colors.secondaryBg};
  border-top: none;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
`

export const StyledText1 = styled(Text)`
  padding: 15px 20px 0px 20px;
  font-size: ${({ theme }) => theme.fontSize.mPlus};
  width: 100%;
`
export const StyledText2 = styled(Text)`
  padding: 15px 20px;
  color: ${({ theme }) => theme.colors.textSecondary};
  width: 100%;
`
