import React from 'react'

import { ReactComponent as CheckmarkIcon } from '@/assets/icons/check.svg'
import { ReactComponent as ScissorsIcon } from '@/assets/icons/scissors.svg'

import { Wrapper, StyledText } from './MoreInfoBookmark.styles'

export const MoreInfoBookmark = () => {
  return (
    <Wrapper>
      <StyledText>
        <CheckmarkIcon />
        Oznacz wszystkie jako przeczytane
      </StyledText>
      <StyledText>
        <ScissorsIcon />
        Wyczyść powiadomienia
      </StyledText>
    </Wrapper>
  )
}
