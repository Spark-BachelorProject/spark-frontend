import styled from 'styled-components'

import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

export const Wrapper = styled.div`
  box-shadow: ${({ theme }) => theme.colors.popupShadow};
  background-color: ${({ theme }) => theme.colors.primaryBg};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  max-width: 330px;
`

export const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.mainDivider};
  display: flex;
  align-items: center;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 10px 10px;
  gap: 10px;

  & > svg {
    width: 80px;
    height: 80px;

    & > path {
      stroke: ${({ theme }) => theme.colors.white};
    }
  }
`

export const StyledTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.titleFont};
`

export const Content = styled.section`
  border: 1px solid ${({ theme }) => theme.colors.secondaryBg};
  border-top: none;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`

export const StyledText1 = styled(Text)`
  padding: 20px 20px 0px 20px;
  font-size: ${({ theme }) => theme.fontSize.sPlus};
  color: ${({ theme }) => theme.colors.titleFont};
  width: 100%;
`
export const StyledText2 = styled(Text)`
  padding: 20px 20px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.placeholder};
  width: 100%;
`
