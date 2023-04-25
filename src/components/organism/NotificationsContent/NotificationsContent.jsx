import React from 'react'
import useModal from '@/hooks/useModal'

import { Title } from '@/components/atoms/Title/Title.styles'
import { StyledMoreInfoIcon } from '../BookmarkedContent/BookmarkedContent.styles'
import { HeadingWrapper } from '../BookmarkedContent/BookmarkedContent.styles'
import { Notification } from '../Notification/Notification'
import { Wrapper, NotificationsWrapper } from './NotificationsContent.styles'
import { MoreInfoNotifications } from '../MoreInfoNotifications/MoreInfoNotifications'

export const NotificationsContent = () => {
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
        <Title isBold>Powiadomienia</Title>
        <div
          onClick={(e) => handleOpenBookmarksPopup(e)}
          onKeyDown={handleCloseBookmarksPopup}
          ref={modalOpenElementRef}
        >
          <StyledMoreInfoIcon />
        </div>
      </HeadingWrapper>
      <NotificationsWrapper>
        <Notification name="Andrzej Kowal" type="comment" time={3} />
        <Notification name="Justyna Szewc" type="attend" time={13} />
        <Notification name="Kasia Baran" type="comment" time={180} />
        <Notification name="Andrzej Kowal" type="cancel" time={12} />
      </NotificationsWrapper>
      {isOpen ? (
        <Modal handleClose={handleCloseModal} position={position} width="big" isFixed>
          <MoreInfoNotifications />
        </Modal>
      ) : null}
    </Wrapper>
  )
}
