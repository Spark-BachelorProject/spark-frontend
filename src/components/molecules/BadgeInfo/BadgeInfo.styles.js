import styled from 'styled-components'

import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

export const Wrapper = styled.div`
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.05);
  background-color: ${({ theme }) => theme.colors.primaryBg};
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  max-width: 330px;
`

export const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
  display: flex;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding: 15px 20px;
  gap: 10px;

  & > svg > path {
    stroke: ${({ theme }) => theme.colors.white};
  }
`

export const StyledTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.white};
`

export const Content = styled.section`
  border: 1px solid ${({ theme }) => theme.colors.secondaryBg};
  border-top: none;
  border-radius: 10px;
`

export const StyledText1 = styled(Text)`
  padding: 15px 20px 0px 20px;
  font-size: ${({ theme }) => theme.fontSize.mPlus};
  width: 100%;
`
export const StyledText2 = styled(Text)`
  padding: 15px 20px;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.placeholder};
  width: 100%;
`
