import React from 'react'

import { DividerLabel } from '@/components/atoms/DividerLabel/DividerLabel.styles'
import Loader from '@/components/atoms/Loader/Loader'
import { Title } from '@/components/atoms/Title/Title.styles'
import Post from '@/components/organism/Post/Post'
import ProfileDetails from '@/components/organism/ProfileDetails/ProfileDetails'
import { getCurrentTimeISOString } from '@/helpers/dateAndTime'
import { useGetPostsQuery } from '@/store/api/posts'

import { StyledPageContent } from './Profile.styles'

//TODO: ask about some endpoint for active posts
const Profile = () => {
  const { data: posts, isLoading } = useGetPostsQuery()
  const currentTime = getCurrentTimeISOString()

  if (isLoading) {
    return <Loader isCentered />
  }
  const activePosts = posts.filter((post) => currentTime < post.dateEnd)
  const archivedPosts = posts.filter((post) => currentTime > post.dateEnd)

  return (
    <StyledPageContent>
      <ProfileDetails />
      <div>
        <DividerLabel>Aktualne posty</DividerLabel>
        {!isLoading && activePosts.map((post) => <Post {...post} key={post.id} />)}
        {!isLoading && activePosts.length === 0 && <Title>Brak aktywnych postów</Title>}
        <DividerLabel>Archiwalne posty</DividerLabel>
        {!isLoading && archivedPosts.map((post) => <Post {...post} key={post.id} />)}
      </div>
    </StyledPageContent>
  )
}

export default Profile
