import React from 'react'
import { StyledText } from '../MoreInfoPost/MoreInfoPost.styles'
import { ReactComponent as CopyIcon } from '@/assets/icons/clipboard.svg'
import { Wrapper } from './MoreInfoNotifications.styles'

export const MoreInfoNotifications = () => {
  return (
    <Wrapper>
      <StyledText>
        <CopyIcon />
        Oznacz wszystkie jako przeczytane
      </StyledText>
    </Wrapper>
  )
}
