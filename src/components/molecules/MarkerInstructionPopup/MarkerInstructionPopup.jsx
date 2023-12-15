import { ReactComponent as InfoIcon } from '@/assets/icons/info.svg'

import { StyledText, Wrapper } from './MarkerInstructionPopup.styles'

export const MarkerInstructionPopup = () => {
  return (
    <Wrapper>
      <InfoIcon style={{ scale: '130%' }} />
      <StyledText>Możesz przesunąć pinezkę, aby dokładniej wybrać lokalizację</StyledText>
    </Wrapper>
  )
}
