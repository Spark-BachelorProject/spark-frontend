import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as BookmarkIcon } from '@/assets/icons/bookmark.svg'
import { ReactComponent as MoonIcon } from '@/assets/icons/moon.svg'
import { ReactComponent as SunIcon } from '@/assets/icons/sun.svg'
import {
  Wrapper,
  InnerWrapper,
  LogoAndInputWrapper,
  InnerIconsWrapperRight,
  StyledThumbnail,
  StyledIconBorder,
} from './HeaderSearchBar.styles'
import { StyledLogoIcon } from '@/components/atoms/Logo/Logo.styles'
import SearchInput from '@/components/molecules/SearchInput/SearchInput'
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg'
import { IconBorder } from '@/components/atoms/IconBorder/IconBorder.styles'
import { BookmarkedContent } from '@/components/organism/BookmarkedContent/BookmarkedContent'
import { NotificationBell } from '@/components/molecules/NotificationBell/NotificationBell'
import useModal from '@/hooks/useModal'
import { Counter } from '@/components/atoms/Counter/Counter'
import { ProfileContent } from '../ProfileContent/ProfileContent'

// TODO:
// Add to BellIcon circle counter in the corner

export const HeaderSearchBar = ({ toggleColorsTheme, colorsTheme }) => {
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
  } = useModal()

  const positioning = 'right'

  const handleKeyDownOnChangeTheme = (e) => {
    if (e.key === 'Enter') {
      toggleColorsTheme()
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

  return (
    <Wrapper modalIsOpen={isOpen}>
      <InnerWrapper>
        <LogoAndInputWrapper>
          <Link to="/">
            <StyledLogoIcon />
          </Link>
          <SearchInput Icon={<SearchIcon />} />
        </LogoAndInputWrapper>
        <InnerIconsWrapperRight>
          <NotificationBell count="3" isRed hasCounter />
          {isOpen ? (
            <Modal handleClose={handleCloseModal} position={position} isFixed>
              <BookmarkedContent />
            </Modal>
          ) : null}
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
            onClick={toggleColorsTheme}
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
          {isOpen2 ? (
            <Modal2 handleClose={handleCloseModal2} position={position2}>
              <ProfileContent />
            </Modal2>
          ) : null}
        </InnerIconsWrapperRight>
      </InnerWrapper>
    </Wrapper>
  )
}
