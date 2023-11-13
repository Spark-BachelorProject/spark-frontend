import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { ReactComponent as BookmarkIcon } from '@/assets/icons/bookmark.svg'
import { ReactComponent as MoonIcon } from '@/assets/icons/moon.svg'
import { ReactComponent as SunIcon } from '@/assets/icons/sun.svg'
import { Counter } from '@/components/atoms/Counter/Counter'
import { IconBorder } from '@/components/atoms/IconBorder/IconBorder.styles'
import { StyledLogoIcon } from '@/components/atoms/Logo/Logo.styles'
import { NotificationBell } from '@/components/molecules/NotificationBell/NotificationBell'
import { BookmarkedContent } from '@/components/organism/BookmarkedContent/BookmarkedContent'
import { NotificationsContent } from '@/components/organism/NotificationsContent/NotificationsContent'
import { ProfileContent } from '@/components/organism/ProfileContent/ProfileContent'
import SearchBar from '@/components/organism/SearchBar/SearchBar'
import usePopup from '@/hooks/usePopup'
import { toggle } from '@/store/theme/themeSlice'

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
  const navigate = useNavigate()

  const isHeaderSearchBar = true
  const {
    Popup: BookmarkPopup,
    isOpen: isOpenBookmarkPopup,
    position: positionBookmarkPopup,
    handleClosePopup: handleCloseBookmarkPopup,
    handleOpenAndPositionPopup: handleOpenAndPositionBookmarkPopup,
    popupOpenElementRef: bookmarkPopupOpenElementRef,
  } = usePopup(null, isHeaderSearchBar)

  const {
    Popup: NotificationPopup,
    isOpen: isOpenNotificationPopup,
    position: positionNotificationPopup,
    handleClosePopup: handleCloseNotificationsPopup,
    handleOpenAndPositionPopup: handleOpenAndPositionNotificationPopup,
    popupOpenElementRef: notificationPopupOpenElementRef,
  } = usePopup(null, isHeaderSearchBar)

  const {
    Popup: ProfilePopup,
    isOpen: isOpenProfilePopup,
    position: positionProfilePopup,
    handleClosePopup: handleCloseProfilePopup,
    handleOpenAndPositionPopup: handleOpenAndPositionProfilePopup,
    popupOpenElementRef: profilePopupOpenElementRef,
  } = usePopup(null, isHeaderSearchBar)

  const positioning = 'right'

  const handleKeyDownOnChangeTheme = (e) => {
    if (e.key === 'Enter') {
      dispatch(toggle())
    }
  }

  // Bookmarks popup
  const extendedHandleOpenBookmarksPopup = () => {
    handleOpenAndPositionBookmarkPopup(bookmarkPopupOpenElementRef, positioning)
  }

  const extendedHandleCloseBookmarksPopup = (e) => {
    if (e.key !== 'Tab') {
      handleCloseBookmarkPopup(bookmarkPopupOpenElementRef, positioning)
    }
  }

  // Notifications popup
  const extendedHandleOpenNotificationsPopup = () => {
    handleOpenAndPositionNotificationPopup(notificationPopupOpenElementRef, positioning)
  }
  const extendedHandleCloseNotificationsPopup = (e) => {
    if (e.key !== 'Tab') {
      handleCloseNotificationsPopup(notificationPopupOpenElementRef, positioning)
    }
  }

  // Profile popup
  const extendedHandleOpenProfilePopup = () => {
    handleOpenAndPositionProfilePopup(profilePopupOpenElementRef, positioning)
  }
  const extendedHandleCloseProfilePopup = (e) => {
    if (e.key !== 'Tab') {
      handleCloseProfilePopup(profilePopupOpenElementRef, positioning)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate(0)
    handleCloseProfilePopup()
  }

  return (
    <Wrapper
      popupIsOpen={!everyIsFalse(isOpenBookmarkPopup, isOpenProfilePopup, isOpenNotificationPopup)}
    >
      <InnerWrapper>
        <LogoAndInputWrapper>
          <Link to="/">
            <StyledLogoIcon />
          </Link>
          <SearchBar />
        </LogoAndInputWrapper>
        <InnerIconsWrapperRight>
          <div
            tabIndex="0"
            onClick={(e) => extendedHandleOpenNotificationsPopup(e)}
            onKeyDown={extendedHandleCloseNotificationsPopup}
            ref={notificationPopupOpenElementRef}
          >
            <NotificationBell count="3" isRed hasCounter />
          </div>

          <IconBorder
            tabIndex="0"
            onClick={(e) => extendedHandleOpenBookmarksPopup(e)}
            onKeyDown={extendedHandleCloseBookmarksPopup}
            ref={bookmarkPopupOpenElementRef}
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
            onClick={(e) => extendedHandleOpenProfilePopup(e)}
            onKeyDown={extendedHandleCloseProfilePopup}
            ref={profilePopupOpenElementRef}
            tabIndex={0}
          >
            <StyledThumbnail />
          </StyledIconBorder>

          {isOpenNotificationPopup ? (
            <NotificationPopup
              handleClose={extendedHandleCloseNotificationsPopup}
              position={positionNotificationPopup}
              isFixed
            >
              <NotificationsContent />
            </NotificationPopup>
          ) : null}

          {isOpenBookmarkPopup ? (
            <BookmarkPopup
              handleClose={handleCloseBookmarkPopup}
              position={positionBookmarkPopup}
              isFixed
            >
              <BookmarkedContent />
            </BookmarkPopup>
          ) : null}

          {isOpenProfilePopup ? (
            <ProfilePopup
              handleClose={handleCloseProfilePopup}
              position={positionProfilePopup}
              isFixed
            >
              <ProfileContent handleClose={handleCloseProfilePopup} handleLogout={handleLogout} />
            </ProfilePopup>
          ) : null}
        </InnerIconsWrapperRight>
      </InnerWrapper>
    </Wrapper>
  )
}

export default HeaderSearchBar
