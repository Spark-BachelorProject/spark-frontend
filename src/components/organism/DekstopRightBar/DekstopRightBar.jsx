import React from 'react'

import Loader from '@/components/atoms/Loader/Loader'
import { Text } from '@/components/atoms/Text/Text.styles'
import { PersonListItem } from '@/components/molecules/PersonListItem/PersonListItem'
import { SocialItem } from '@/components/molecules/SocialItem/SocialItem'
import { useGetGroupsRecommendedQuery } from '@/store/api/groups'
import { useGetUserFriendsQuery } from '@/store/api/user'

import { Wrapper } from './DekstopRightBar.styles'
import { Container, StyledContainer, StyledTitle, StyledSocialItem } from './DekstopRightBar.styles'

// TODO: wait for API to Sporty dla Ciebie and check styles
export const DekstopRightBar = () => {
  const {
    data: friends,
    isLoading: isLoadingGetUserFriend,
    isSuccess: isSuccessGetUserFriends,
  } = useGetUserFriendsQuery()
  const {
    data: groupsRecommended,
    isLoading: isLoadingGroupsRecommended,
    isSuccess: isSuccessGroupsRecommended,
  } = useGetGroupsRecommendedQuery()

  return (
    <Wrapper>
      <Container>
        <StyledTitle isBig isBold>
          Polecane Grupy
        </StyledTitle>
        {isLoadingGroupsRecommended ? <Loader isCentered /> : null}
        {!isLoadingGroupsRecommended && isSuccessGroupsRecommended && !groupsRecommended.length && (
          <Text>Nie ma grup do wyświetlenia</Text>
        )}
        {!isLoadingGroupsRecommended &&
          isSuccessGroupsRecommended &&
          groupsRecommended.map((group) => <SocialItem key={group.id} {...group} />)}
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
        {isLoadingGetUserFriend ? <Loader isCentered /> : null}
        {!isLoadingGetUserFriend && isSuccessGetUserFriends && !friends.length && (
          <Text>Nie masz znajomych</Text>
        )}
        {!isLoadingGetUserFriend &&
          isSuccessGetUserFriends &&
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
