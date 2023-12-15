import styled from 'styled-components'

import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 15px;
  gap: 5px;
  margin: 0 -7px;
  cursor: pointer;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.accent : 'transparent'};
  border-radius: 8px;

  ${Text} {
    color: ${({ isSelected, theme }) => (isSelected ? theme.colors.white : theme.colors.text)};
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.inputBg};
    transition: 0.2s ease-out;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    & > img {
      height: 30px;
    }
  }
`
