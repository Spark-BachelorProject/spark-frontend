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

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  & > svg {
    position: absolute;
    right: 15px;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    scale: 0.9;
  }

  & > svg > path {
    scale: 0.9;
    stroke: ${({ theme }) => theme.colors.fontRed};
    fill: ${({ theme }) => theme.colors.fontRed};
  }
`
