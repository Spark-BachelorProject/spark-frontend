import React from 'react'

import { Data } from '@react-google-maps/api'

import { ReactComponent as ReportIcon } from '@/assets/icons/alert-triangle.svg'
import { ReactComponent as BellIcon } from '@/assets/icons/bell.svg'
import { ReactComponent as BookmarkIcon } from '@/assets/icons/bookmark.svg'
import { ReactComponent as CopyIcon } from '@/assets/icons/clipboard.svg'
import { ReactComponent as DeleteIcon } from '@/assets/icons/delete-square.svg'
import { useLazyGetOneBookmarkedPostQuery } from '@/store/api/user'

import { Wrapper, StyledText } from './MoreInfoPost.styles'

export const MoreInfoPost = ({ postId }) => {
  const [trigger] = useLazyGetOneBookmarkedPostQuery()

  const handleSavePost = () => {
    trigger(postId)
  }

  return (
    <Wrapper>
      <StyledText>
        <CopyIcon />
        Skopiuj link
      </StyledText>
      <StyledText onClick={handleSavePost}>
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
