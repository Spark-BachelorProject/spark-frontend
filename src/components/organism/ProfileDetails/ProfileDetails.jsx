import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import React, { useState } from 'react'
import Tags from '@/components/atoms/Tags/Tags'
import Badge from '@/components/molecules/Badge/Badge'
import { ReactComponent as BellIcon } from '@/assets/icons/bell.svg'
import { ReactComponent as UsersIcon } from '@/assets/icons/users.svg'
import {
  ActivitySection,
  BadgesSection,
  BadgesWrapper,
  ImgAndNameSection,
  StyledTitle,
  Wrapper,
} from './ProfileDetails.styles'
import useModal from '@/hooks/useModal'
import BadgeInfo from '@/components/molecules/BadgeInfo/BadgeInfo'

const badges = [
  { Icon: BellIcon, text: 'Najlepszy team' },
  { Icon: UsersIcon, text: 'Ulubieniec1' },
  { Icon: UsersIcon, text: 'Ulubieniec2' },
  { Icon: UsersIcon, text: 'Ulubieniec3' },
  { Icon: UsersIcon, text: 'Ulubieniec4' },
  { Icon: UsersIcon, text: 'Ulubieniec5' },
  { Icon: UsersIcon, text: 'Ulubieniec6' },
  { Icon: BellIcon, text: 'Weteran' },
]

//TODO: Show on hover info about badges

const ProfileDetails = () => {
  const [currentBadge, setCurrentBadge] = useState(null)
  const {
    Modal,
    isOpen,
    position,
    handleCloseModal,
    handleOpenAndPositionModal,
    modalOpenElementRef,
  } = useModal()
  const positioning = 'left'

  const handleOpenBadgeInfo = ({ Icon, text }) => {
    setCurrentBadge({ Icon, text })
    handleOpenAndPositionModal(modalOpenElementRef, positioning, 120)
  }

  const handleCloseBadgeInfo = (e) => {
    if (e.key !== 'Tab') {
      // setCurrentBadge({ Icon, text })
      // setCurrentBadge(null)
      handleOpenAndPositionModal(modalOpenElementRef, positioning, 120)
    }
  }

  return (
    <Wrapper>
      <ImgAndNameSection>
        <Thumbnail />
        <Title>Justyna Szewc</Title>
      </ImgAndNameSection>
      <ActivitySection>
        <StyledTitle>Ulubione aktywności</StyledTitle>
        <Tags>{['Gramy na luzie', 'Jeszcze 2 miejsca', 'Potem na harnasia']}</Tags>
      </ActivitySection>
      <BadgesSection>
        <StyledTitle>Odznaki</StyledTitle>
        <BadgesWrapper>
          {badges.map(({ Icon, text }, i) => (
            <Badge
              // onClick={() => handleOpenBadgeInfo({ Icon, text })}
              onMouseOver={() => handleOpenBadgeInfo({ Icon, text })}
              // onMouseLeave={handleCloseBadgeInfo}
              ref={modalOpenElementRef}
              tabIndex={0}
              key={i}
              Icon={Icon}
            >
              {text}
            </Badge>
          ))}

          {isOpen ? (
            <Modal handleClose={handleCloseModal} position={position} hasNoPadding>
              <BadgeInfo badge={currentBadge} />
            </Modal>
          ) : null}
        </BadgesWrapper>
      </BadgesSection>
    </Wrapper>
  )
}

export default ProfileDetails
