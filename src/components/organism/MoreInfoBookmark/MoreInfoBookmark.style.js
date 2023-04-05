import styled from 'styled-components'
import { Text } from '@/components/atoms/Text/Text.style'

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin: -18px 0 -10px 15px;
`

export const StyledText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 10px 0 0 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.checkboxTick};

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
