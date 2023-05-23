import styled from 'styled-components'

import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  width: 250px;
  height: fit-content;
  padding: 25px 20px;
  border-radius: 7px;

  ${Text} {
    width: 100%;
    margin-top: 15px;
  }
`
