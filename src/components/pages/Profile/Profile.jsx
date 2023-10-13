import React from 'react'
import { useSelector } from 'react-redux'

import { DividerLabel } from '@/components/atoms/DividerLabel/DividerLabel.styles'
import Post from '@/components/organism/Post/Post'
import ProfileDetails from '@/components/organism/ProfileDetails/ProfileDetails'

import { StyledPageContent } from './Profile.styles'

const Profile = () => {
  const posts = useSelector((state) => state.posts)

  return (
    <StyledPageContent>
      <ProfileDetails />
      <div>
        <DividerLabel>Aktualne posty</DividerLabel>
        {posts.map((post, i) => (
          <Post
            key={i}
            content={post.content}
            author={'Kamil Żyła'}
            date={post.date}
            tags={post.tags}
            time={post.time}
            place={post.place}
            activity={post.activity}
          />
        ))}
        <DividerLabel>Archiwalne posty</DividerLabel>
        <Post
          content="Ktoś chętny na grę w piłkę nożną?"
          author={'Kamil Żyła'}
          date={'2021-06-22'}
          tags={['Piłka nożna', 'Lublin', 'Konopnica']}
          time={'18:00'}
          place={'Konopnica'}
          activity={'Piłka nożna'}
        />
        <Post
          content="Piwo i flanki?"
          author={'Kamil Żyła'}
          date={'2021-10-9'}
          tags={['Piwo', 'Lublin', 'Konopnica']}
          time={'18:00'}
          place={'Lublin'}
          activity={'Piwo'}
        />
      </div>
    </StyledPageContent>
  )
}

export default Profile
