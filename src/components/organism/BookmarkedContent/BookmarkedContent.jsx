import React from 'react'

import { Title } from '@/components/atoms/Title/Title.styles'
import { SavedPost } from '@/components/molecules/SavedPost/SavedPost'
import usePopup from '@/hooks/usePopup'

import { MoreInfoBookmark } from '../MoreInfoBookmark/MoreInfoBookmark'
import { Wrapper, HeadingWrapper, StyledMoreInfoIcon } from './BookmarkedContent.styles'

export const BookmarkedContent = () => {
  const {
    Popup,
    isOpen,
    position,
    handleClosePopup,
    handleOpenAndPositionPopup,
    popupOpenElementRef,
  } = usePopup()
  const positioning = 'right'

  const handleOpenBookmarksPopup = () => {
    handleOpenAndPositionPopup(popupOpenElementRef, positioning)
  }

  const handleCloseBookmarksPopup = (e) => {
    if (e.key !== 'Tab') {
      handleOpenAndPositionPopup(popupOpenElementRef, positioning)
    }
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
      <SavedPost
        name="Andrzej Kowal"
        activity="Squash"
        place="Politechnika Lubelska"
        adress="Kraśnicka 21"
        isCancelled
      />
      <SavedPost
        name="Justyna Szec"
        activity="Nordic Walking"
        place="CSK Lublin"
        adress="Racławickie 14/12"
      />
      <SavedPost name="Krzysztof Raban" activity="Futsal" place="Hala UMCS" adress="Stepowa 12" />
      <SavedPost
        name="Krzysztof Raban"
        activity="Futsal"
        place="Hala UMCS"
        adress="Stepowa 12"
        isCancelled
      />
      <SavedPost name="Krzysztof Raban" activity="Futsal" place="Hala UMCS" adress="Stepowa 12" />

      {isOpen ? (
        <Popup handleClose={handleClosePopup} position={position} width="big" isFixed>
          <MoreInfoBookmark />
        </Popup>
      ) : null}
    </Wrapper>
  )
}
