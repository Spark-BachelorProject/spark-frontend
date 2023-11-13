import React from 'react'

import Loader from '@/components/atoms/Loader/Loader'
import { Text } from '@/components/atoms/Text/Text.styles'
import { PersonListItem } from '@/components/molecules/PersonListItem/PersonListItem'
import { SocialItem } from '@/components/molecules/SocialItem/SocialItem'
import { useGetUserFriendsQuery } from '@/store/api/user'

import { Wrapper } from './DekstopRightBar.styles'
import { Container, StyledContainer, StyledTitle, StyledSocialItem } from './DekstopRightBar.styles'

export const DekstopRightBar = () => {
  const { data: friends, isLoading, isSuccess } = useGetUserFriendsQuery()

  return (
    <Wrapper>
      <Container>
        <StyledTitle isBig isBold>
          Polecane Grupy
        </StyledTitle>
        <SocialItem TitleText="Pollub Hala" ActivityName="Futsal" Comment="Blisko Ciebie" />
        <SocialItem
          TitleText="Tenisowe Wariaty"
          ActivityName="Tenis"
          Comment="Duże zainteresowanie"
        />
        <SocialItem TitleText="Squash Po Piwie" ActivityName="Squash" Comment="Znajomi należą" />
      </Container>
      <Container>
        <StyledTitle isBig isBold>
          Sporty dla Ciebie
        </StyledTitle>
        <StyledSocialItem ActivityName="Tenis" WeeklyPostCount={7} />
        <SocialItem ActivityName="Squash" WeeklyPostCount={6} />
      </Container>
      <StyledContainer>
        <StyledTitle isBig isBold>
          Znajomi
        </StyledTitle>
        {isLoading ? <Loader isCentered /> : null}
        {!isLoading && isSuccess && !friends.length && <Text>Nie masz znajomych</Text>}
        {!isLoading &&
          isSuccess &&
          friends.map(({ id, firstName, lastName, profilePictureURL }) => (
            <PersonListItem
              key={id}
              firstName={firstName}
              lastName={lastName}
              profilePictureURL={profilePictureURL}
            />
          ))}
      </StyledContainer>
    </Wrapper>
  )
}
