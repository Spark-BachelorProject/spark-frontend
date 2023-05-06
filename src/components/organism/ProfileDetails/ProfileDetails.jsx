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

const ProfileDetails = () => {
  const [currentBadge, setCurrentBadge] = useState(null)
  const { Modal, isOpen, position, handleCloseModal, handleOpenAndPositionModal } = useModal()
  const positioning = 'left'

  const handleOpenBadgeInfo = (e, { Icon, text }) => {
    setCurrentBadge({ Icon, text })
    handleOpenAndPositionModal(e.target, positioning)
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
              onMouseEnter={(e) => handleOpenBadgeInfo(e, { Icon, text })}
              onMouseLeave={handleCloseModal}
              tabIndex={0}
              key={i}
              Icon={Icon}
            >
              {text}
            </Badge>
          ))}
          {isOpen ? (
            <Modal position={position} hasNoPadding hasNoBackground>
              <BadgeInfo badge={currentBadge} />
            </Modal>
          ) : null}
        </BadgesWrapper>
      </BadgesSection>
    </Wrapper>
  )
}

export default ProfileDetails
