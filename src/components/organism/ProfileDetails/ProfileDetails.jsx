import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import React from 'react'
import Tags from '@/components/atoms/Tags/Tags'
import Badge from '@/components/molecules/Badge/Badge'
import { ReactComponent as BellIcon } from '@/assets/icons/bell.svg'
import {
  ActivitySection,
  BadgesSection,
  BadgesWrapper,
  ImgAndNameSection,
  StyledTitle,
  Wrapper,
} from './ProfileDetails.styles'

const ProfileDetails = () => {
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
          <Badge Icon={BellIcon}>Najlepszy team</Badge>
          <Badge Icon={BellIcon}>Weteran</Badge>
          <Badge Icon={BellIcon}>Ulubieniec</Badge>
        </BadgesWrapper>
      </BadgesSection>
    </Wrapper>
  )
}

export default ProfileDetails
