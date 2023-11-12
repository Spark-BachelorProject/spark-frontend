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
import SearchBar from '@/components/organism/SearchBar/SearchBar'
import usePopup from '@/hooks/usePopup'
import { toggle } from '@/store/theme/themeSlice'

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
  const navigate = useNavigate()

  const isHeaderSearchBar = true
  const {
    Popup,
    isOpen,
    position,
    handleClosePopup,
    handleOpenAndPositionPopup,
    popupOpenElementRef,
  } = usePopup(null, isHeaderSearchBar)

  const {
    Popup: Popup2,
    isOpen: isOpen2,
    position: position2,
    handleClosePopup: handleClosePopup2,
    handleOpenAndPositionPopup: handleOpenAndPositionPopup2,
    popupOpenElementRef: popupOpenElementRef2,
  } = usePopup(null, isHeaderSearchBar)

  const {
    Popup: Popup3,
    isOpen: isOpen3,
    position: position3,
    handleClosePopup: handleClosePopup3,
    handleOpenAndPositionPopup: handleOpenAndPositionPopup3,
    popupOpenElementRef: popupOpenElementRef3,
  } = usePopup(null, isHeaderSearchBar)

  const positioning = 'right'

  const handleKeyDownOnChangeTheme = (e) => {
    if (e.key === 'Enter') {
      dispatch(toggle())
    }
  }

  const handleOpenBookmarksPopup = () => {
    handleOpenAndPositionPopup(popupOpenElementRef, positioning)
  }

  const handleCloseBookmarksPopup = (e) => {
    if (e.key !== 'Tab') {
      handleOpenAndPositionPopup(popupOpenElementRef, positioning)
    }
  }

  const handleOpenProfilePopup = () => {
    handleOpenAndPositionPopup2(popupOpenElementRef2, positioning)
  }

  const handleCloseProfilePopup = (e) => {
    if (e.key !== 'Tab') {
      handleOpenAndPositionPopup2(popupOpenElementRef2, positioning)
    }
  }

  const handleOpenNotificationsPopup = () => {
    handleOpenAndPositionPopup3(popupOpenElementRef3, positioning)
  }

  const handleCloseNotificationsPopup = (e) => {
    if (e.key !== 'Tab') {
      handleOpenAndPositionPopup3(popupOpenElementRef3, positioning)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate(0)
    handleClosePopup2()
  }

  return (
    <Wrapper popupIsOpen={!everyIsFalse(isOpen, isOpen2, isOpen3)}>
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
            onClick={(e) => handleOpenNotificationsPopup(e)}
            onKeyDown={handleCloseNotificationsPopup}
            ref={popupOpenElementRef3}
          >
            <NotificationBell count="3" isRed hasCounter />
          </div>

          <IconBorder
            tabIndex="0"
            onClick={(e) => handleOpenBookmarksPopup(e)}
            onKeyDown={handleCloseBookmarksPopup}
            ref={popupOpenElementRef}
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
            ref={popupOpenElementRef2}
            tabIndex={0}
          >
            <StyledThumbnail />
          </StyledIconBorder>

          {isOpen ? (
            <Popup handleClose={handleClosePopup} position={position} isFixed>
              <BookmarkedContent />
            </Popup>
          ) : null}

          {isOpen2 ? (
            <Popup2 handleClose={handleClosePopup2} position={position2} isFixed>
              <ProfileContent handleClose={handleClosePopup2} handleLogout={handleLogout} />
            </Popup2>
          ) : null}

          {isOpen3 ? (
            <Popup3 handleClose={handleClosePopup3} position={position3} isFixed>
              <NotificationsContent />
            </Popup3>
          ) : null}
        </InnerIconsWrapperRight>
      </InnerWrapper>
    </Wrapper>
  )
}

export default HeaderSearchBar
