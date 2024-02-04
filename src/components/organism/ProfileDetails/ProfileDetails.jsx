import { useState } from 'react'

import Avvvatars from 'avvvatars-react'

import { ReactComponent as EarlybirdBadge } from '@/assets/badges/earlybird.svg'
import { ReactComponent as FeedbackBadge } from '@/assets/badges/feedback.svg'
import { ReactComponent as FirstBadge } from '@/assets/badges/first_post.svg'
import { ReactComponent as IronmanBadge } from '@/assets/badges/ironman.svg'
import { ReactComponent as OwlBadge } from '@/assets/badges/owl.svg'
import { ReactComponent as VeteranBadge } from '@/assets/badges/veteran.svg'
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
    description: 'Najlepszy z najlepszych! 100 postów na forum.',
    rarity: '6',
    date: '24 stycznia 2024',
  },
  {
    Icon: FeedbackBadge,
    text: 'Głos społeczności',
    description: 'Dziękujemy! Każda wysłana opinia przyczynia się w rozwoju aplikacji.',
    rarity: '3',
    date: '2 lutego 2023',
  },
  {
    Icon: FirstBadge,
    text: 'Sportowa dusza',
    description: 'Pierwszy post na forum. To początek wielkiej przygody!',
    rarity: '1',
    date: '24 marca 2024',
  },
  {
    Icon: EarlybirdBadge,
    text: 'Skowronek',
    description: 'Kiedy inni śpią, Ty bijesz rekordy! Pierwsze spotkanie przed 7 rano.',
    rarity: '4',
    date: '24 marca 2024',
  },
  {
    Icon: IronmanBadge,
    text: 'Ironman',
    description: 'Dwa spotkania w jeden dzień. Jesteś niezłomny!',
    rarity: '5',
    date: '24 marca 2024',
  },
  {
    Icon: OwlBadge,
    text: 'Nocny marek',
    description: 'Sen jest dla słabych! Pierwsze spotkanie po 22:00.',
    rarity: '4',
    date: '24 marca 2024',
  },
]

const favouriteActivities = ['Kajaki', 'Kręgle', 'Pływanie', 'Wędrówki', 'Flanki']

// TODO: badges from backend should have icon or something like that
const ProfileDetails = () => {
  const { data: user, isLoading } = useGetUserQuery()

  const [currentBadge, setCurrentBadge] = useState(null)
  const {
    Popup,
    isOpen,
    position,
    handleClosePopup,
    handleOpenAndPositionPopup,
    popupOpenElementRef,
  } = usePopup()
  const positioning = 'left'
  const handleOpenBadgeInfo = (e, { Icon, text, description, date }) => {
    setCurrentBadge({ Icon, text, description, date })
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

          {sortedBadges.map(({ Icon, text, description, date }, i) => (
            <Badge
              onMouseEnter={(e) => handleOpenBadgeInfo(e, { Icon, text, description, date })}
              onMouseLeave={handleClosePopup}
              ref={popupOpenElementRef}
              tabIndex={0}
              key={i}
              Icon={Icon}
            />
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
