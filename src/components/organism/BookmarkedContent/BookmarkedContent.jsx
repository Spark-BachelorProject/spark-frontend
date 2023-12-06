import React from 'react'
import { useNavigate } from 'react-router'

import Loader from '@/components/atoms/Loader/Loader'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import { SavedPost } from '@/components/molecules/SavedPost/SavedPost'
import usePopup from '@/hooks/usePopup'

import { MoreInfoBookmark } from '../MoreInfoBookmark/MoreInfoBookmark'
import { Wrapper, HeadingWrapper, StyledMoreInfoIcon } from './BookmarkedContent.styles'

export const BookmarkedContent = ({
  bookmarkedPosts,
  isLoadingBookmarkedPosts,
  isSuccessBookmarkedPosts,
}) => {
  const {
    Popup,
    isOpen,
    position,
    handleClosePopup,
    handleOpenAndPositionPopup,
    popupOpenElementRef,
  } = usePopup()
  const positioning = 'right'
  const navigate = useNavigate()

  const handleOpenBookmarksPopup = () => {
    handleOpenAndPositionPopup(popupOpenElementRef, positioning)
  }

  const handleCloseBookmarksPopup = (e) => {
    if (e.key !== 'Tab') {
      handleOpenAndPositionPopup(popupOpenElementRef, positioning)
    }
  }

  const handleOpenSinglePost = (id) => {
    navigate(`/posts/${id}`)
  }

  return (
    <Wrapper>
      <HeadingWrapper>
        <Title isBold>Zapisane aktywności</Title>
        <div
          onClick={(e) => handleOpenBookmarksPopup(e)}
          onKeyDown={handleCloseBookmarksPopup}
          ref={popupOpenElementRef}
        >
          <StyledMoreInfoIcon />
        </div>
      </HeadingWrapper>
      {isLoadingBookmarkedPosts && <Loader isCentered />}
      {!isLoadingBookmarkedPosts && isSuccessBookmarkedPosts && bookmarkedPosts.length === 0 && (
        <Text isBold>Nie masz zapisanych aktywności</Text>
      )}
      {!isLoadingBookmarkedPosts &&
        isSuccessBookmarkedPosts &&
        bookmarkedPosts.length > 0 &&
        bookmarkedPosts.map((post) => (
          <SavedPost key={post.id} {...post} handleOpenSinglePost={handleOpenSinglePost} />
        ))}
      {isOpen ? (
        <Popup handleClose={handleClosePopup} position={position} width="big" isFixed>
          <MoreInfoBookmark />
        </Popup>
      ) : null}
    </Wrapper>
  )
}
