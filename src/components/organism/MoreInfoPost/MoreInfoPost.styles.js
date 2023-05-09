import styled from 'styled-components'

import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  height: auto;

  margin: -18px 0 -10px 15px;
`

export const StyledText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 0 5px;
  margin: 20px 0 15px 0;
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
  }

  & > svg > path {
    stroke: ${({ theme }) => theme.colors.checkboxTick};
  }
`
