import { useState } from 'react'

import Avvvatars from 'avvvatars-react'

import { ReactComponent as FeedbackBadge } from '@/assets/icons/feedback.svg'
import { ReactComponent as FirstBadge } from '@/assets/icons/first.svg'
import { ReactComponent as VeteranBadge } from '@/assets/icons/veteran.svg'
import Loader from '@/components/atoms/Loader/Loader'
import { Title } from '@/components/atoms/Title/Title.styles'
import { ActivityBadge } from '@/components/molecules/ActivityBadge/ActivityBadge'
import Badge from '@/components/molecules/Badge/Badge'
import BadgeInfo from '@/components/molecules/BadgeInfo/BadgeInfo'
import { FavouriteActivitiesSelect } from '@/components/molecules/FavouriteActivitiesSelect/FavouriteActivitiesSelect'
import { getInitials } from '@/helpers/stringOperations'
import useModal from '@/hooks/useModal'
import usePopup from '@/hooks/usePopup'
import { useGetUserQuery } from '@/store/api/user'

import {
  ActivitiesWrapper,
  ActivitySection,
  BadgesSection,
  BadgesWrapper,
  EditWrapper,
  ImgAndNameSection,
  SettingsButton,
  StyledSettingsIcon,
  StyledTitle,
  Wrapper,
} from './ProfileDetails.styles'

const badges = [
  {
    Icon: VeteranBadge,
    text: 'Weteran',
    description: 'Oznaka przyznawana za dodanie 100 postów',
    rarity: '5',
  },
  {
    Icon: FeedbackBadge,
    text: 'Głos społeczności',
    description: 'Oznaka przyznawana za wysłanie opinii',
    rarity: '3',
  },
  {
    Icon: FirstBadge,
    text: 'Sportowa dusza',
    description: 'Oznaka przyznawana za dodanie pierwszego postu',
    rarity: '1',
  },
]

const favouriteActivities = ['Flanki', 'Kajaki', 'Wspinaczka', 'Kręgle', 'Pływanie', 'Wędrówki']

// TODO: badges from backend should have icon or something like that
const ProfileDetails = () => {
  const { data: user, isLoading } = useGetUserQuery()

  const [currentBadge, setCurrentBadge] = useState(null)
  const { Popup, isOpen, position, handleClosePopup, handleOpenAndPositionPopup } = usePopup()
  const positioning = 'left'
  const handleOpenBadgeInfo = (e, { Icon, text, description }) => {
    setCurrentBadge({ Icon, text, description })
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

  const sortedBadges = badges.sort((a, b) => a.rarity - b.rarity)

  return (
    <Wrapper>
      <ImgAndNameSection>
        <Avvvatars value={getInitials(user.firstName, user.lastName)} size={110} />

        <Title>{isLoading ? <Loader isCentered /> : `${user.firstName} ${user.lastName}`}</Title>
      </ImgAndNameSection>

      {/* //TODO: check preffered activity */}

      {/* {isLoading && user.preferredActivity ? ( */}
      <ActivitySection>
        <EditWrapper>
          <StyledTitle>Ulubione aktywności</StyledTitle>
          <SettingsButton
            onClick={(e) => handleOpenFavouritesModal(e)}
            onKeyDown={handleCloseFavouritesModal}
            ref={modalOpenElementRef}
          >
            <StyledSettingsIcon />
          </SettingsButton>
        </EditWrapper>
        <ActivitiesWrapper>
          {favouriteActivities.map((activity, i) => (
            <ActivityBadge key={i} name={activity} />
          ))}
        </ActivitiesWrapper>
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

          {sortedBadges.map(({ Icon, text, description }, i) => (
            <Badge
              onMouseEnter={(e) => handleOpenBadgeInfo(e, { Icon, text, description })}
              onMouseLeave={handleClosePopup}
              tabIndex={0}
              key={i}
              Icon={Icon}
            >
              dsasdaisodjis
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
