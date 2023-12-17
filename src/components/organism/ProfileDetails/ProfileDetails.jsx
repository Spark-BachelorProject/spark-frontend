import { useState } from 'react'

import Avvvatars from 'avvvatars-react'

import { ReactComponent as BellIcon } from '@/assets/icons/bell.svg'
import { ReactComponent as UsersIcon } from '@/assets/icons/users.svg'
import Loader from '@/components/atoms/Loader/Loader'
import Tags from '@/components/atoms/Tags/Tags'
import { Title } from '@/components/atoms/Title/Title.styles'
import Badge from '@/components/molecules/Badge/Badge'
import BadgeInfo from '@/components/molecules/BadgeInfo/BadgeInfo'
import { FavouriteActivitiesSelect } from '@/components/molecules/FavouriteActivitiesSelect/FavouriteActivitiesSelect'
import { getInitials } from '@/helpers/stringOperations'
import useModal from '@/hooks/useModal'
import usePopup from '@/hooks/usePopup'
import { useGetUserQuery } from '@/store/api/user'

import {
  ActivitySection,
  BadgesSection,
  BadgesWrapper,
  EditWrapper,
  ImgAndNameSection,
  StyledSettingsIcon,
  StyledTitle,
  Wrapper,
} from './ProfileDetails.styles'

const badges = [
  { Icon: BellIcon, text: 'Sportowa dusza' },
  { Icon: UsersIcon, text: 'Mistrz konsystencji' },
  { Icon: UsersIcon, text: 'Eksplorator' },
  { Icon: UsersIcon, text: 'Weteran' },
  { Icon: UsersIcon, text: 'Sowa' },
  { Icon: UsersIcon, text: 'Skowronek' },
  { Icon: UsersIcon, text: 'Mistrz jednej dziedziny ' },
  { Icon: BellIcon, text: 'Ironman' },
]
// TODO: badges from backend should have icon or something like that
const ProfileDetails = () => {
  const { data: user, isLoading } = useGetUserQuery()

  const [currentBadge, setCurrentBadge] = useState(null)
  const { Popup, isOpen, position, handleClosePopup, handleOpenAndPositionPopup } = usePopup()
  const positioning = 'left'

  const handleOpenBadgeInfo = (e, { Icon, text }) => {
    setCurrentBadge({ Icon, text })
    handleOpenAndPositionPopup(e.target, positioning)
  }

  const {
    Modal,
    isOpen: isModalOpen,
    position: position2,
    handleCloseModal,
    handleOpenAndPositionModal,
    modalOpenElementRef,
  } = useModal()

  const positioning2 = 'center'

  const handleOpenFavouritesModal = () => {
    handleOpenAndPositionModal(modalOpenElementRef, positioning2)
  }

  const handleCloseFavouritesModal = (e) => {
    if (e.key !== 'Tab') {
      handleOpenAndPositionModal(modalOpenElementRef, positioning2)
    }
  }

  return (
    <Wrapper>
      <ImgAndNameSection>
        <Avvvatars value={getInitials(user.firstName, user.lastName)} size={90} />

        <Title>{isLoading ? <Loader isCentered /> : `${user.firstName} ${user.lastName}`}</Title>
      </ImgAndNameSection>

      {/* //TODO: check preffered activity */}

      {/* {isLoading && user.preferredActivity ? ( */}
      <ActivitySection>
        <EditWrapper>
          <StyledTitle>Ulubione aktywności</StyledTitle>
          <div
            onClick={(e) => handleOpenFavouritesModal(e)}
            onKeyDown={handleCloseFavouritesModal}
            ref={modalOpenElementRef}
          >
            <StyledSettingsIcon />
          </div>
        </EditWrapper>
        <Tags>
          {[
            {
              id: 1,
              name: 'Kajaki',
              type: 'Sport',
            },
            {
              id: 2,
              name: 'Wspinaczka',
              type: 'Poziom',
            },
            {
              id: 3,
              name: 'Wędkarstwo',
              type: 'Poziom',
            },
          ]}
        </Tags>
      </ActivitySection>
      {/* ) : null} */}

      <BadgesSection>
        {/* //TODO: check badges */}
        <StyledTitle>Odznaki</StyledTitle>
        <BadgesWrapper>
          {/* {!isLoading
            ? user.badges.map(({ Icon, text }, i) => (
                <Badge
                  onMouseEnter={(e) => handleOpenBadgeInfo(e, { Icon, text })}
                  onMouseLeave={handleCloseModal}
                  tabIndex={0}
                  key={i}
                  Icon={Icon}
                >
                  {text}
                </Badge>
              ))
            : null} */}

          {badges.map(({ Icon, text }, i) => (
            <Badge
              onMouseEnter={(e) => handleOpenBadgeInfo(e, { Icon, text })}
              onMouseLeave={handleClosePopup}
              tabIndex={0}
              key={i}
              Icon={Icon}
            >
              {text}
            </Badge>
          ))}
          {isOpen ? (
            <Popup position={position} hasNoPadding hasNoBackground>
              <BadgeInfo badge={currentBadge} />
            </Popup>
          ) : null}
        </BadgesWrapper>
      </BadgesSection>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          handleClose={handleCloseModal}
          position={position2}
          isFixed
          isModal
          hasBackgroundColor
        >
          <FavouriteActivitiesSelect handleClose={handleCloseModal} />
        </Modal>
      )}
    </Wrapper>
  )
}

export default ProfileDetails
