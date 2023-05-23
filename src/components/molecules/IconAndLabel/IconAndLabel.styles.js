import styled from 'styled-components'

import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  & > div {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  ${Text} {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.placeholder};
  }
`

export const IconBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.navbarBorder};
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  & > svg > path {
    stroke: ${({ theme }) => theme.colors.buttonBg};
  }
`
