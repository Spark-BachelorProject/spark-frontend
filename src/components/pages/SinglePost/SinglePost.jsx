import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

import Post from '@/components/organism/Post/Post'
import { PageContent } from '@/components/templates/PageContent/PageContent'

import { StyledTitle } from './SunglePost.styles'

const SinglePost = () => {
  const { id } = useParams()

  const post = useSelector((state) => state.posts.find((post) => post.id === +id))

  return (
    <PageContent hasRightBar hasNavigation>
      {id !== undefined && post ? (
        <Post
          content={post.content}
          author={post.author}
          date={post.date}
          tags={post.tags}
          time={post.time}
          place={post.place}
          activity={post.activity}
        />
      ) : (
        <StyledTitle>Post not found</StyledTitle>
      )}
    </PageContent>
  )
}

export default SinglePost
