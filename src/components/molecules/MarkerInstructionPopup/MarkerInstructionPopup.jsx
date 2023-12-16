import { StyledInfoIcon, StyledText, Wrapper } from './MarkerInstructionPopup.styles'

export const MarkerInstructionPopup = () => {
  return (
    <Wrapper>
      <StyledInfoIcon />
      <StyledText>Możesz przesuwać pinezkę, aby dokładniej wybrać lokalizację</StyledText>
    </Wrapper>
  )
}
