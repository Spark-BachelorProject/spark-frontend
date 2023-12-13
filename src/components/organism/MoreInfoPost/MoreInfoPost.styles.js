import styled from 'styled-components'

import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.div`
  width: 100%;
  padding: 5px;
  height: auto;
  margin: -15px 0 -20px 15px;
`

export const StyledText = styled(Text)`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 15px 10px;
  margin-top: -3px;
  margin-left: -7px;
  border-radius: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    color: ${({ theme }) => theme.colors.textHeader};
    background-color: ${({ theme }) => theme.colors.addPostBg};
    transition: 200ms linear;

    & > svg > path {
      stroke: ${({ theme }) => theme.colors.textHeader};
      transition: 200ms linear;
    }
  }

  & > svg {
    margin-right: 7px;
  }

  & > svg > path {
    stroke: ${({ theme }) => theme.colors.text};
  }

  & > svg > path {
    fill: ${({ theme }) => theme.colors.text};
  }

  & > svg > g > path {
    fill: ${({ theme }) => theme.colors.text};
  }
`
