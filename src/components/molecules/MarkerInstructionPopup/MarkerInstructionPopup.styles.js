import styled from 'styled-components'

import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.div`
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 50%;
  bottom: -5%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 1000;

  background-color: ${({ theme }) => theme.colors.accent};
  padding: 6px 2px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 100%;
    padding: 8px 2px;
  }
`

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};
`
