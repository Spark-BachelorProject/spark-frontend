import React from 'react'

import { DividerLabel } from '@/components/atoms/DividerLabel/DividerLabel.styles'
import Post from '@/components/organism/Post/Post'
import ProfileDetails from '@/components/organism/ProfileDetails/ProfileDetails'

import { StyledPageContent } from './Profile.styles'

const Profile = () => {
  return (
    <StyledPageContent>
      <ProfileDetails />
      <div>
        <DividerLabel>Aktualne posty</DividerLabel>
        <Post />
        <DividerLabel>Archiwalne posty</DividerLabel>
        <Post />
        <Post />
      </div>
    </StyledPageContent>
  )
}

export default Profile
