import React from 'react'
import { NavLink } from 'react-router-dom'

import Avvvatars from 'avvvatars-react'

import { ReactComponent as HomeIcon } from '@/assets/icons/home.svg'
import { ReactComponent as MapIcon } from '@/assets/icons/map.svg'
import { ReactComponent as UsersIcon } from '@/assets/icons/users.svg'
import CreatePost from '@/components/organism/CreatePost/CreatePost'
import { getInitials } from '@/helpers/stringOperations'
import useModal from '@/hooks/useModal'
import { useGetUserQuery } from '@/store/api/user'

import { Wrapper, IconsWrapper, StyledPlusSquareIcon } from './NavigationBar.styles'

const NavigationBar = () => {
  const {
    data: { firstName, lastName },
  } = useGetUserQuery()

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
          <Avvvatars value={getInitials(firstName, lastName)} size={32} />
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
