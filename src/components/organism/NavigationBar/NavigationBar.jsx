import React from 'react'
import { NavLink } from 'react-router-dom'

import { ReactComponent as HomeIcon } from '@/assets/icons/home.svg'
import { ReactComponent as MapIcon } from '@/assets/icons/map.svg'
import { ReactComponent as UsersIcon } from '@/assets/icons/users.svg'
import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'
import CreatePost from '@/components/organism/CreatePost/CreatePost'
import useModal from '@/hooks/useModal'

import { Wrapper, IconsWrapper, StyledPlusSquareIcon } from './NavigationBar.styles'

const NavigationBar = () => {
  const {
    Modal,
    isOpen,
    position,
    handleCloseModal,
    handleOpenAndPositionModal,
    modalOpenElementRef,
  } = useModal()

  const positioning = 'center'

  const handleOpenAddPostPopup = () => {
    handleOpenAndPositionModal(modalOpenElementRef, positioning)
  }

  const handleCloseAddPostPopup = (e) => {
    if (e.key !== 'Tab') {
      handleOpenAndPositionModal(modalOpenElementRef, positioning)
    }
  }

  return (
    <Wrapper>
      <IconsWrapper>
        <NavLink to="/">
          <HomeIcon />
        </NavLink>
        <NavLink to="/groups">
          <UsersIcon />
        </NavLink>
        <div
          onClick={(e) => handleOpenAddPostPopup(e)}
          onKeyDown={handleCloseAddPostPopup}
          ref={modalOpenElementRef}
        >
          <StyledPlusSquareIcon />
        </div>

        <NavLink to="/map">
          <MapIcon />
        </NavLink>
        <NavLink to="/profile">
          <Thumbnail />
          {/* <UserIcon /> */}
        </NavLink>
      </IconsWrapper>
      {isOpen ? (
        <Modal
          handleClose={handleCloseModal}
          position={position}
          isFixed
          isModal
          hasBackgroundColor
        >
          <CreatePost handleClose={handleCloseModal} />
        </Modal>
      ) : null}
    </Wrapper>
  )
}

export default NavigationBar
