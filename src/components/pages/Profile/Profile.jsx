import { PostDividerLabel } from '@/components/atoms/PostDividerLabel/PostDividerLabel.styles'
import Post from '@/components/organism/Post/Post'
import ProfileDetails from '@/components/organism/ProfileDetails/ProfileDetails'
import { PageContent } from '@/components/templates/PageContent/PageContent'
import React from 'react'
import styled from 'styled-components'

// TODO: style profile and refactor
const StyledPageContent = styled(PageContent)`
  /* margin: 30px;


  display: flex;
  flex-direction: column;
  gap: 30px; */
  /* justify-content: center; */
  /* @media screen and (min-width: 997px) {
    margin-top: 1000px;
  } */

  /* @media screen and (min-width: ${({ theme }) => theme.breakPoints.m}) {
    flex-direction: row;
  } */
`

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
