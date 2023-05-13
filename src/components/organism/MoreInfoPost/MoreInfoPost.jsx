import React from 'react'

import { ReactComponent as ReportIcon } from '@/assets/icons/alert-triangle.svg'
import { ReactComponent as BellIcon } from '@/assets/icons/bell.svg'
import { ReactComponent as BookmarkIcon } from '@/assets/icons/bookmark.svg'
import { ReactComponent as CopyIcon } from '@/assets/icons/clipboard.svg'
import { ReactComponent as DeleteIcon } from '@/assets/icons/delete-square.svg'

import { Wrapper, StyledText } from './MoreInfoPost.styles'

export const MoreInfoPost = () => {
  return (
    <Wrapper>
      <StyledText>
        <CopyIcon />
        Skopiuj link
      </StyledText>
      <StyledText>
        <BookmarkIcon />
        Zapisz post
      </StyledText>
      <StyledText>
        <BellIcon />
        Włącz powiadomienia
      </StyledText>
      <StyledText>
        <DeleteIcon />
        Ukryj post
      </StyledText>
      <StyledText>
        <ReportIcon />
        Zgłoś administratorom
      </StyledText>
    </Wrapper>
  )
}
