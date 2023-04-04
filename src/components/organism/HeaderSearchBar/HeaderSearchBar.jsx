import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as BellIcon } from '@/assets/icons/bell.svg'
import { ReactComponent as BookmarkIcon } from '@/assets/icons/bookmark.svg'
import { ReactComponent as MoonIcon } from '@/assets/icons/moon.svg'
import { ReactComponent as SunIcon } from '@/assets/icons/sun.svg'
import {
  Wrapper,
  InnerWrapper,
  LogoAndInputWrapper,
  InnerIconsWrapperRight,
  Divider,
} from './HeaderSearchBar.styles'
import { StyledLogoIcon } from '@/components/atoms/Logo/Logo.styles'
import SearchInput from '@/components/molecules/SearchInput/SearchInput'
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg'
import { IconBorder } from '@/components/atoms/IconBorder/IconBorder.styles'
import useModal from '@/hooks/useModal'
import { SavedPosts } from '../SavedPosts/SavedPosts'

// TODO:
// Add to BellIcon circle counter in the corner

export const HeaderSearchBar = ({ toggleColorsTheme, colorsTheme }) => {
  const handleKeyDownOnChangeTheme = (e) => {
    if (e.key === 'Enter') {
      toggleColorsTheme()
    }
  }

  const handleOpenFilterPopup = (e) => {
    handleOpenAndPositionModal(e.target.getBoundingClientRect(), 'right')
  }

  const { Modal, isOpen, position, handleCloseModal, handleOpenAndPositionModal } = useModal()

  const handleCloseFilterPopup = (e) => {
    if (e.key !== 'Tab') {
      handleOpenAndPositionModal(e.target.getBoundingClientRect(), 'right')
    }
  }

  return (
    <Wrapper>
      <InnerWrapper>
        <LogoAndInputWrapper>
          <Link to="/">
            <StyledLogoIcon />
          </Link>
          <SearchInput Icon={<SearchIcon />} />
        </LogoAndInputWrapper>
        <InnerIconsWrapperRight>
          <IconBorder>
            <BookmarkIcon
              tabIndex="0"
              onClick={(e) => handleOpenFilterPopup(e)}
              onKeyDown={handleCloseFilterPopup}
            />
            <Divider />
            <BellIcon tabIndex="0" />
          </IconBorder>
          {isOpen ? (
            <Modal handleClose={handleCloseModal} position={position}>
              <SavedPosts />
            </Modal>
          ) : null}
          <IconBorder
            tabIndex="0"
            onClick={toggleColorsTheme}
            onKeyDown={handleKeyDownOnChangeTheme}
          >
            {colorsTheme === 'light' ? <MoonIcon /> : <SunIcon />}
          </IconBorder>
        </InnerIconsWrapperRight>
      </InnerWrapper>
    </Wrapper>
  )
}
