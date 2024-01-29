import styled from 'styled-components'

import { Text } from '@/components/atoms/Text/Text.styles'

export const StyledText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 15px 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    color: ${({ theme }) => theme.colors.textHeader};
    transition: 100ms linear;

    & > svg > path {
      stroke: ${({ theme }) => theme.colors.textHeader};
      transition: 100ms linear;
    }
  }

  & > svg {
    margin-right: 7px;
    height: 17px;
    fill: ${({ theme }) => theme.colors.textHeader};
    transition: 100ms linear;
  }

  & > svg > path {
    fill: ${({ theme }) => theme.colors.checkboxTick};
  }
`
