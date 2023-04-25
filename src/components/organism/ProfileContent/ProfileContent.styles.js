import styled from 'styled-components'
import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.div`
  width: 200px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
`

export const StyledText = styled(Text)`
  cursor: pointer;
  display: flex;
  gap: 10px;
  margin-left: -5px;

  :hover {
    color: ${({ theme }) => theme.colors.textHeader};
  }

  & > svg {
    height: 18px;
  }

  & > svg > path {
    stroke: ${({ theme }) => theme.colors.text};
  }
`
