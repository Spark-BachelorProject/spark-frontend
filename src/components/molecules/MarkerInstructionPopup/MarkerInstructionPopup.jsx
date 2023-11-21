import styled from 'styled-components'

import { ReactComponent as InfoIcon } from '@/assets/icons/info.svg'
import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.div`
  position: absolute;
  width: 90%;
  bottom: 10px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  left: 20px;
  z-index: 1000;

  background-color: ${({ theme }) => theme.colors.accent};
  padding: 5px 7px;
  border-radius: 5px;
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
