import { DividerLabel } from '@/components/atoms/DividerLabel/DividerLabel.styles'
import Loader from '@/components/atoms/Loader/Loader'
import { Text } from '@/components/atoms/Text/Text.styles'
import { PersonListItem } from '@/components/molecules/PersonListItem/PersonListItem'
import { RecomendedActivity } from '@/components/molecules/RecomendedActivity/RecomendedActivity'
import { SocialItem } from '@/components/molecules/SocialItem/SocialItem'
import { useGetRecommendedActivitiesQuery } from '@/store/api/activities'
import { useGetGroupsRecommendedQuery } from '@/store/api/groups'
import { useGetUserFriendsQuery } from '@/store/api/user'

import { Container, StyledTitle, Wrapper } from './DekstopRightBar.styles'

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

  const {
    data: recommendedActivities,
    isLoading: isLoadingRecommendedActivities,
    isSuccess: isSuccessRecommendedActivities,
  } = useGetRecommendedActivitiesQuery()

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
      <DividerLabel isSolid />
      <Container>
        <StyledTitle isBig isBold>
          Sporty dla Ciebie
        </StyledTitle>
        {isLoadingRecommendedActivities ? <Loader isCentered /> : null}
        {!isLoadingRecommendedActivities &&
          isSuccessRecommendedActivities &&
          !recommendedActivities.length && <Text>Nie ma aktywności do wyświetlenia</Text>}

        {!isLoadingRecommendedActivities &&
          isSuccessRecommendedActivities &&
          recommendedActivities.map((activity) => (
            <RecomendedActivity key={activity.id} {...activity} />
          ))}
      </Container>
      <DividerLabel isSolid />
      <Container>
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
      </Container>
    </Wrapper>
  )
}
