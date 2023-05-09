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
  { Icon: BellIcon, text: 'Sportowa dusza' },
  { Icon: UsersIcon, text: 'Mistrz konsystencji' },
  { Icon: UsersIcon, text: 'Eksplorator' },
  { Icon: UsersIcon, text: 'Weteran' },
  { Icon: UsersIcon, text: 'Sowa' },
  { Icon: UsersIcon, text: 'Skowronek' },
  { Icon: UsersIcon, text: 'Mistrz jednej dziedziny ' },
  { Icon: BellIcon, text: 'Ironman' },
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
        <Tags>{['Siatkówka', 'Squash']}</Tags>
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
