import { Title } from '@/components/atoms/Title/Title.styles'
import React from 'react'
import { SavedPost } from '@/components/molecules/SavedPost/SavedPost'
import { Wrapper, HeadingWrapper, StyledMoreInfoIcon } from './BookmarkedContent.styles'
import useModal from '@/hooks/useModal'
import { MoreInfoBookmark } from '../MoreInfoBookmark/MoreInfoBookmark'

export const BookmarkedContent = () => {
  const {
    Modal,
    isOpen,
    position,
    handleCloseModal,
    handleOpenAndPositionModal,
    modalOpenElementRef,
  } = useModal()
  const positioning = 'right'

  const handleOpenBookmarksPopup = () => {
    handleOpenAndPositionModal(modalOpenElementRef, positioning)
  }

  const handleCloseBookmarksPopup = (e) => {
    if (e.key !== 'Tab') {
      handleOpenAndPositionModal(modalOpenElementRef, positioning)
    }
  }

  return (
    <Wrapper>
      <HeadingWrapper>
        <Title isBold>Zapisane aktywności</Title>
        <div
          onClick={(e) => handleOpenBookmarksPopup(e)}
          onKeyDown={handleCloseBookmarksPopup}
          ref={modalOpenElementRef}
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
        <Modal handleClose={handleCloseModal} position={position} width="big" isFixed>
          <MoreInfoBookmark />
        </Modal>
      ) : null}
    </Wrapper>
  )
}
