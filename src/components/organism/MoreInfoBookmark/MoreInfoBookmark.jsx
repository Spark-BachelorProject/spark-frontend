import React from 'react'

import { ReactComponent as CheckmarkIcon } from '@/assets/icons/check.svg'
import { ReactComponent as ScissorsIcon } from '@/assets/icons/scissors.svg'
import { useDeleteBookmarkedPostsMutation } from '@/store/api/user'

import { Wrapper, StyledText } from './MoreInfoBookmark.styles'

export const MoreInfoBookmark = () => {
  const [deleteBookmarkedPosts] = useDeleteBookmarkedPostsMutation()

  const handleDeleteBookmarkedPosts = async () => {
    try {
      await deleteBookmarkedPosts()
    } catch (error) {
      console.error('Error deleting bookmarked posts:', error)
    }
  }

  return (
    <Wrapper>
      <StyledText>
        <CheckmarkIcon />
        Oznacz wszystkie jako przeczytane
      </StyledText>
      <StyledText onClick={handleDeleteBookmarkedPosts}>
        <ScissorsIcon />
        Wyczyść zapisane posty
      </StyledText>
    </Wrapper>
  )
}
