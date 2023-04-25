import React from 'react'
import useModal from '@/hooks/useModal'
import {
  Wrapper,
  NotificationsWrapper,
  HeadingWrapper,
  StyledTitle,
  StyledMoreInfoIcon,
} from './NotificationsContent.styles'
import { MoreInfoNotifications } from '@/components/organism/MoreInfoNotifications/MoreInfoNotifications'
import { Counter } from '@/components/atoms/Counter/Counter'
import { Notification } from '@/components/organism/Notification/Notification'

//TODO: count unread notification and save in localstorage

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

  const howManyUnread = 2

  return (
    <Wrapper>
      <HeadingWrapper>
        <StyledTitle isBold>
          Powiadomienia <Counter hasCounter count={howManyUnread} />
        </StyledTitle>

        <div
          onClick={(e) => handleOpenBookmarksPopup(e)}
          onKeyDown={handleCloseBookmarksPopup}
          ref={modalOpenElementRef}
        >
          <StyledMoreInfoIcon />
        </div>
      </HeadingWrapper>
      <NotificationsWrapper>
        <Notification name="Andrzej Kowal" type="comment" time={3} isRead />
        <Notification name="Justyna Szewc" type="attend" time={13} />
        <Notification name="Kasia Baran" type="comment" time={180} />
        <Notification name="Andrzej Kowal" type="cancel" time={12} isRead />
      </NotificationsWrapper>
      {isOpen ? (
        <Modal handleClose={handleCloseModal} position={position} width="big" isFixed>
          <MoreInfoNotifications />
        </Modal>
      ) : null}
    </Wrapper>
  )
}
