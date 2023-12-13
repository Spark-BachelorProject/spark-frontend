import React from 'react'

import { ReactComponent as FilterIcon } from '@/assets/icons/filter.svg'
import { ReactComponent as UsersIcon } from '@/assets/icons/users.svg'
import { Button } from '@/components/atoms/Buttons/Button.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import CreateGroup from '@/components/organism/CreateGroup/CreateGroup'
import useModal from '@/hooks/useModal'

import {
  GroupsActionSection,
  IconAndLabel,
  IconBackground,
  StyledIconBorder,
  Wrapper,
} from './GroupsActionBar.styles'

const GroupsActionBar = ({
  hasFilters = true,
  groupName = 'Grupy',
  numOfPosts = 0,
  buttonText = 'Stwórz grupę',
}) => {
  const {
    Modal,
    isOpen,
    position,
    handleCloseModal,
    handleOpenAndPositionModal,
    modalOpenElementRef,
  } = useModal()

  const positioning = 'center'

  const handleOpenAddGroup = () => {
    handleOpenAndPositionModal(modalOpenElementRef, positioning)
  }

  const handleCloseAddGroup = (e) => {
    if (e.key !== 'Tab') {
      handleOpenAndPositionModal(modalOpenElementRef, positioning)
    }
  }

  //FIXME: proper way of display grupy, grupa, grup
  return (
    <Wrapper>
      <IconAndLabel>
        <IconBackground>
          <UsersIcon />
        </IconBackground>
        <div>
          <Title isBig>{groupName}</Title>
          <Text>{numOfPosts || 0} aktualnych postów</Text>
        </div>
      </IconAndLabel>
      <GroupsActionSection>
        {hasFilters ? (
          <StyledIconBorder tabIndex="0">
            <FilterIcon />
          </StyledIconBorder>
        ) : null}
        <Button
          onClick={(e) => handleOpenAddGroup(e)}
          onKeyDown={handleCloseAddGroup}
          ref={modalOpenElementRef}
        >
          {buttonText}
        </Button>
      </GroupsActionSection>
      {isOpen ? (
        <Modal
          handleClose={handleCloseModal}
          position={position}
          isFixed
          isModal
          hasBackgroundColor
        >
          <CreateGroup handleClose={handleCloseModal} />
        </Modal>
      ) : null}
    </Wrapper>
  )
}

export default GroupsActionBar
