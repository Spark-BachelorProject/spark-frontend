import React from 'react'

import { PostDividerLabel } from '@/components/atoms/PostDividerLabel/PostDividerLabel.styles'
import Post from '@/components/organism/Post/Post'
import ProfileDetails from '@/components/organism/ProfileDetails/ProfileDetails'

import { StyledPageContent } from './Profile.styles'

const Profile = () => {
  return (
    <StyledPageContent>
      <ProfileDetails />
      <div>
        <PostDividerLabel>Aktualne posty</PostDividerLabel>
        <Post />
        <PostDividerLabel>Archiwalne posty</PostDividerLabel>
        <Post />
        <Post />
      </div>
    </StyledPageContent>
  )
}

export default Profile
