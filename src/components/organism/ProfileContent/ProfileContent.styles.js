import styled from 'styled-components'

import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.div`
  width: 200px;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: -10px;
  margin-top: -10px;

  & > a {
    width: 100%;
  }
`

export const StyledText = styled(Text)`
  cursor: pointer;
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 15px 10px;
  border-radius: 8px;
  margin-top: -3px;

  :hover {
    color: ${({ theme }) => theme.colors.textHeader};
    background-color: ${({ theme }) => theme.colors.addPostBg};
    transition: 200ms linear;
  }

  & > svg {
    height: 18px;
  }

  & > svg > path {
    stroke: ${({ theme }) => theme.colors.text};
  }
`

export const StyledLogoutText = styled(StyledText)`
  :hover {
    color: ${({ theme }) => theme.colors.redFont};
    transition: 200ms linear;

    & > svg > path {
      stroke: ${({ theme }) => theme.colors.redFont};
      transition: 200ms linear;
    }
  }
`
