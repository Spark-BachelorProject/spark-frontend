import styled from 'styled-components'

import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 8px 0;
  margin-left: -20px;
  padding: 8px 20px;
  cursor: pointer;

  & > div {
    display: flex;
    gap: 8px;
    flex-direction: row;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.modalBg};
    transition: 200ms ease-in-out;
  }
`

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.grayDetails};
`
