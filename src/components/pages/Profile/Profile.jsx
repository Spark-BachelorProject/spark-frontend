import React from 'react'
import { useSelector } from 'react-redux'

import { DividerLabel } from '@/components/atoms/DividerLabel/DividerLabel.styles'
import Post from '@/components/organism/Post/Post'
import ProfileDetails from '@/components/organism/ProfileDetails/ProfileDetails'
import { useGetPostsQuery } from '@/store/api/posts'

import { StyledPageContent } from './Profile.styles'

const Profile = () => {
  // const posts = useSelector((state) => state.posts)
  const { data: posts, isLoading } = useGetPostsQuery()

  return (
    <StyledPageContent>
      <ProfileDetails />
      <div>
        <DividerLabel>Aktualne posty</DividerLabel>
        {!isLoading && posts.map((post, i) => <Post {...post} key={post.id} />)}
        <DividerLabel>Archiwalne posty</DividerLabel>
      </div>
    </StyledPageContent>
  )
}

export default Profile
