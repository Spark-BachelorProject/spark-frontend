import { useParams } from 'react-router'

import Loader from '@/components/atoms/Loader/Loader'
import GroupsActionBar from '@/components/organism/GroupsActionBar/GroupsActionBar'
import Post from '@/components/organism/Post/Post'
import { PageContent } from '@/components/templates/PageContent/PageContent'
import { useGetOneGroupQuery } from '@/store/api/groups'
import { useGetPostsByGroupQuery } from '@/store/api/posts'

import { StyledTitle } from './Group.styles'

const Group = () => {
  const { id } = useParams()
  const {
    data: group,
    isLoading: isLoadingGroup,
    isSuccess: isSuccessGroup,
  } = useGetOneGroupQuery(id)
  const {
    data: posts,
    isLoading: isLoadingPosts,
    isSuccess: isSuccessPosts,
  } = useGetPostsByGroupQuery(id)

  return (
    <PageContent hasNavigation hasRightBar>
      {isLoadingGroup && <Loader isCentered />}
      {!isLoadingGroup && isSuccessGroup && !isLoadingPosts && isSuccessPosts && posts && group && (
        <GroupsActionBar
          numOfPosts={posts.length || 0}
          groupName={group?.name || 'Nieznana nazwa grupy'}
          hasFilters={false}
          buttonText={'Dodaj post'}
          groupId={id}
        />
      )}
      {isLoadingPosts && <Loader isCentered />}
      {!isLoadingPosts && isSuccessPosts && posts ? (
        posts.map((post) => <Post {...post} key={post.id} />)
      ) : (
        <StyledTitle>Grupa nie została znaleziona</StyledTitle>
      )}
    </PageContent>
  )
}

export default Group
