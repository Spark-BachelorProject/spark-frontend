import styled from 'styled-components'

import { Suggestion, SuggestionWrapper } from '../PlaceAutocomplete/PlaceAutocomplete.styles'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const StyledSuggestionWrapper = styled(SuggestionWrapper)`
  margin-top: 5em;
`

export const StyledSuggestion = styled(Suggestion)`
  margin: 0;
`
