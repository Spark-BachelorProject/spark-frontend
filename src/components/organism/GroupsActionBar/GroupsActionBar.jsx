import { ReactComponent as FilterIcon } from '@/assets/icons/filter.svg'
import { ReactComponent as UsersIcon } from '@/assets/icons/users.svg'
import { Button } from '@/components/atoms/Buttons/Button.styles'
import { SecondaryButton } from '@/components/atoms/Buttons/SecondaryButton.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import CreateGroup from '@/components/organism/CreateGroup/CreateGroup'
import CreatePost from '@/components/organism/CreatePost/CreatePost'
import useModal from '@/hooks/useModal'
import { useIsMemberQuery, useJoinGroupMutation, useLeaveGroupMutation } from '@/store/api/groups'

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
  groupId = 0,
  isGroup,
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

  const _handleOpenModal = () => {
    handleOpenAndPositionModal(modalOpenElementRef, positioning)
  }

  const _handleCloseModal = (e) => {
    if (e.key !== 'Tab') {
      handleOpenAndPositionModal(modalOpenElementRef, positioning)
    }
  }

  const [joinGroup] = useJoinGroupMutation()
  const [leaveGroup] = useLeaveGroupMutation()

  const { data: isMember } = useIsMemberQuery(groupId)

  const handleJoinLeave = async () => {
    if (!isMember) {
      await joinGroup(groupId)
    } else {
      await leaveGroup(groupId)
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
          <Text>
            {numOfPosts || 'Brak'} {numOfPosts === 1 ? 'aktualny post' : 'aktualnych postów'}
          </Text>
        </div>
      </IconAndLabel>
      <GroupsActionSection>
        {hasFilters ? (
          <StyledIconBorder tabIndex="0">
            <FilterIcon />
          </StyledIconBorder>
        ) : null}
        {isGroup && (
          <SecondaryButton onClick={handleJoinLeave} isFilled={!isMember}>
            {isMember ? 'Opuść grupę' : 'Dołącz do grupy'}
          </SecondaryButton>
        )}
        <Button
          onClick={(e) => _handleOpenModal(e)}
          onKeyDown={_handleCloseModal}
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
          {groupId ? (
            <CreatePost handleClose={handleCloseModal} groupId={groupId} />
          ) : (
            <CreateGroup handleClose={handleCloseModal} />
          )}
        </Modal>
      ) : null}
    </Wrapper>
  )
}

export default GroupsActionBar
