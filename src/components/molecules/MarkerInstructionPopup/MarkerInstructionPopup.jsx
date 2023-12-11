import styled from 'styled-components'

import { ReactComponent as InfoIcon } from '@/assets/icons/info.svg'
import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.div`
  position: absolute;
  width: 50%;
  bottom: -5%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  z-index: 1000;

  background-color: ${({ theme }) => theme.colors.accent};
  padding: 8px 7px;
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

export const MarkerInstructionPopup = () => {
  return (
    <Wrapper>
      <InfoIcon style={{ scale: '130%' }} />
      <StyledText>Możesz przesunąć marker, aby dokładniej wybrać lokalizację</StyledText>
    </Wrapper>
  )
}
