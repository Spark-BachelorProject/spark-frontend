import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { ReactComponent as BookmarkIcon } from '@/assets/icons/bookmark.svg'
import { ReactComponent as MoonIcon } from '@/assets/icons/moon.svg'
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg'
import { ReactComponent as SunIcon } from '@/assets/icons/sun.svg'
import { Counter } from '@/components/atoms/Counter/Counter'
import { IconBorder } from '@/components/atoms/IconBorder/IconBorder.styles'
import { StyledLogoIcon } from '@/components/atoms/Logo/Logo.styles'
import { NotificationBell } from '@/components/molecules/NotificationBell/NotificationBell'
import SearchInput from '@/components/molecules/SearchInput/SearchInput'
import { BookmarkedContent } from '@/components/organism/BookmarkedContent/BookmarkedContent'
import { toggle } from '@/features/themeSlice'
import useModal from '@/hooks/useModal'

import { NotificationsContent } from '../NotificationsContent/NotificationsContent'
import { ProfileContent } from '../ProfileContent/ProfileContent'
import {
  Wrapper,
  InnerWrapper,
  LogoAndInputWrapper,
  InnerIconsWrapperRight,
  StyledThumbnail,
  StyledIconBorder,
} from './HeaderSearchBar.styles'

const everyIsFalse = (...args) => args.every((arg) => !arg)

const HeaderSearchBar = () => {
  const dispatch = useDispatch()
  const colorsTheme = useSelector((state) => state.theme.theme)

  const isHeaderSearchBar = true
  const {
    Modal,
    isOpen,
    position,
    handleCloseModal,
    handleOpenAndPositionModal,
    modalOpenElementRef,
  } = useModal(null, isHeaderSearchBar)

  const {
    Modal: Modal2,
    isOpen: isOpen2,
    position: position2,
    handleCloseModal: handleCloseModal2,
    handleOpenAndPositionModal: handleOpenAndPositionModal2,
    modalOpenElementRef: modalOpenElementRef2,
  } = useModal(null, isHeaderSearchBar)

  const {
    Modal: Modal3,
    isOpen: isOpen3,
    position: position3,
    handleCloseModal: handleCloseModal3,
    handleOpenAndPositionModal: handleOpenAndPositionModal3,
    modalOpenElementRef: modalOpenElementRef3,
  } = useModal(null, isHeaderSearchBar)

  const positioning = 'right'

  const handleKeyDownOnChangeTheme = (e) => {
    if (e.key === 'Enter') {
      dispatch(toggle())
    }
  }

  const handleOpenBookmarksPopup = () => {
    handleOpenAndPositionModal(modalOpenElementRef, positioning)
  }

  const handleCloseBookmarksPopup = (e) => {
    if (e.key !== 'Tab') {
      handleOpenAndPositionModal(modalOpenElementRef, positioning)
    }
  }

  const handleOpenProfilePopup = () => {
    handleOpenAndPositionModal2(modalOpenElementRef2, positioning)
  }

  const handleCloseProfilePopup = (e) => {
    if (e.key !== 'Tab') {
      handleOpenAndPositionModal2(modalOpenElementRef2, positioning)
    }
  }

  const handleOpenNotificationsPopup = () => {
    handleOpenAndPositionModal3(modalOpenElementRef3, positioning)
  }

  const handleCloseNotificationsPopup = (e) => {
    if (e.key !== 'Tab') {
      handleOpenAndPositionModal3(modalOpenElementRef3, positioning)
    }
  }

  return (
    <Wrapper modalIsOpen={!everyIsFalse(isOpen, isOpen2, isOpen3)}>
      <InnerWrapper>
        <LogoAndInputWrapper>
          <Link to="/">
            <StyledLogoIcon />
          </Link>
          <SearchInput Icon={<SearchIcon />} />
        </LogoAndInputWrapper>
        <InnerIconsWrapperRight>
          <div
            tabIndex="0"
            onClick={(e) => handleOpenNotificationsPopup(e)}
            onKeyDown={handleCloseNotificationsPopup}
            ref={modalOpenElementRef3}
          >
            <NotificationBell count="3" isRed hasCounter />
          </div>

          <IconBorder
            tabIndex="0"
            onClick={(e) => handleOpenBookmarksPopup(e)}
            onKeyDown={handleCloseBookmarksPopup}
            ref={modalOpenElementRef}
          >
            <BookmarkIcon />
            <Counter count="7" />
          </IconBorder>
          <IconBorder
            tabIndex="0"
            onClick={() => dispatch(toggle())}
            onKeyDown={handleKeyDownOnChangeTheme}
          >
            {colorsTheme === 'light' ? <MoonIcon /> : <SunIcon />}
          </IconBorder>
          <StyledIconBorder
            onClick={(e) => handleOpenProfilePopup(e)}
            onKeyDown={handleCloseProfilePopup}
            ref={modalOpenElementRef2}
            tabIndex={0}
          >
            <StyledThumbnail />
          </StyledIconBorder>

          {isOpen ? (
            <Modal handleClose={handleCloseModal} position={position} isFixed>
              <BookmarkedContent />
            </Modal>
          ) : null}

          {isOpen2 ? (
            <Modal2 handleClose={handleCloseModal2} position={position2} isFixed>
              <ProfileContent handleClose={handleCloseModal2} />
            </Modal2>
          ) : null}

          {isOpen3 ? (
            <Modal3 handleClose={handleCloseModal3} position={position3} isFixed>
              <NotificationsContent />
            </Modal3>
          ) : null}
        </InnerIconsWrapperRight>
      </InnerWrapper>
    </Wrapper>
  )
}

export default HeaderSearchBar
