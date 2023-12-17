import { forwardRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import Avvvatars from 'avvvatars-react'

import { ReactComponent as BookmarkIcon } from '@/assets/icons/bookmark.svg'
import { ReactComponent as MoonIcon } from '@/assets/icons/moon.svg'
import { ReactComponent as SunIcon } from '@/assets/icons/sun.svg'
import { Counter } from '@/components/atoms/Counter/Counter'
import { IconBorder } from '@/components/atoms/IconBorder/IconBorder.styles'
import { StyledLogoIcon } from '@/components/atoms/Logo/Logo.styles'
import { BookmarkedContent } from '@/components/organism/BookmarkedContent/BookmarkedContent'
import { NotificationsContent } from '@/components/organism/NotificationsContent/NotificationsContent'
import { ProfileContent } from '@/components/organism/ProfileContent/ProfileContent'
import SearchBar from '@/components/organism/SearchBar/SearchBar'
import { getInitials } from '@/helpers/stringOperations'
import usePopup from '@/hooks/usePopup'
import { useGetBookmarkedPostsQuery, useGetUserQuery } from '@/store/api/user'
import { toggle } from '@/store/theme/themeSlice'

import {
  InnerIconsWrapperRight,
  InnerWrapper,
  LogoAndInputWrapper,
  StyledIconBorder,
  Wrapper,
} from './HeaderSearchBar.styles'

const everyIsFalse = (...args) => args.every((arg) => !arg)

const HeaderSearchBar = forwardRef((props, ref) => {
  const {
    data: bookmarkedPosts,
    isLoading: isLoadingBookmarkedPosts,
    isSuccess: isSuccessBookmarkedPosts,
  } = useGetBookmarkedPostsQuery()
  const {
    data: { firstName, lastName },
    isLoading: isLoadingUser,
    isSuccess: isSuccessUser,
  } = useGetUserQuery()

  const initials = getInitials(firstName, lastName)

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
    // handleOpenAndPositionPopup: handleOpenAndPositionNotificationPopup,
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
  // const extendedHandleOpenNotificationsPopup = () => {
  //   handleOpenAndPositionNotificationPopup(notificationPopupOpenElementRef, positioning)
  // }

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
      ref={ref}
      popupIsOpen={!everyIsFalse(isOpenBookmarkPopup, isOpenProfilePopup, isOpenNotificationPopup)}
    >
      <InnerWrapper>
        <LogoAndInputWrapper>
          <Link to="/">
            <StyledLogoIcon data-testid="logo" />
          </Link>
          <SearchBar />
        </LogoAndInputWrapper>
        <InnerIconsWrapperRight>
          {/* <div
            tabIndex="0"
            onClick={(e) => extendedHandleOpenNotificationsPopup(e)}
            onKeyDown={extendedHandleCloseNotificationsPopup}
            ref={notificationPopupOpenElementRef}
            data-testid="notification-bell-wrapper"
          >
            <NotificationBell count="3" isRed hasCounter />
          </div> */}

          <IconBorder
            tabIndex="0"
            onClick={(e) => extendedHandleOpenBookmarksPopup(e)}
            onKeyDown={extendedHandleCloseBookmarksPopup}
            ref={bookmarkPopupOpenElementRef}
            data-testid="bookmarks-wrapper"
          >
            <BookmarkIcon />
            {!isLoadingBookmarkedPosts &&
              isSuccessBookmarkedPosts &&
              bookmarkedPosts.length > 0 && (
                <Counter count={bookmarkedPosts.length} hasCounter={true} />
              )}
          </IconBorder>
          <IconBorder
            tabIndex="0"
            onClick={() => dispatch(toggle())}
            data-testid="theme-wrapper"
            onKeyDown={handleKeyDownOnChangeTheme}
          >
            {colorsTheme === 'light' ? <MoonIcon /> : <SunIcon />}
          </IconBorder>
          <StyledIconBorder
            onClick={(e) => extendedHandleOpenProfilePopup(e)}
            onKeyDown={extendedHandleCloseProfilePopup}
            ref={profilePopupOpenElementRef}
            tabIndex={0}
            data-testid="profile-wrapper"
          >
            <Avvvatars value={initials} size={32} />
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
              <BookmarkedContent
                bookmarkedPosts={bookmarkedPosts}
                isLoadingBookmarkedPosts={isLoadingBookmarkedPosts}
                isSuccessBookmarkedPosts={isSuccessBookmarkedPosts}
              />
            </BookmarkPopup>
          ) : null}

          {isOpenProfilePopup ? (
            <ProfilePopup
              handleClose={handleCloseProfilePopup}
              position={positionProfilePopup}
              isFixed
            >
              <ProfileContent
                handleClose={handleCloseProfilePopup}
                handleLogout={handleLogout}
                initials={initials}
                firstName={firstName}
                lastName={lastName}
                isLoadingUser={isLoadingUser}
                isSuccessUser={isSuccessUser}
              />
            </ProfilePopup>
          ) : null}
        </InnerIconsWrapperRight>
      </InnerWrapper>
    </Wrapper>
  )
})

export default HeaderSearchBar
