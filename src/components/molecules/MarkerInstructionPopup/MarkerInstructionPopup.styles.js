import styled from 'styled-components'

import { ReactComponent as InfoIcon } from '@/assets/icons/info.svg'
import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.div`
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.08);
  position: absolute;
  width: auto;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  max-width: 95%;
  z-index: 1000;
  border: 1px solid ${({ theme }) => theme.colors.postBorder};


  background-color: ${({ theme }) => theme.colors.iconBg};
  padding: 6px 15px;
  border-radius: 8px;

  @media (max-width: calc(${({ theme }) => theme.breakPoints.mobile} + 100px)) {
    bottom: -8%;
  }
`

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.s};
`

export const StyledInfoIcon = styled(InfoIcon)`
  width: 1.1rem;
  height: 1.1rem;

  path {
    stroke: ${({ theme }) => theme.colors.text};
  }
`
