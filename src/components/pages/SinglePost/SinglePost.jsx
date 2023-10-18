import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

import Post from '@/components/organism/Post/Post'
import { PageContent } from '@/components/templates/PageContent/PageContent'

const SinglePost = () => {
  const { id } = useParams()
  const post = useSelector((state) => state.posts.find((post) => post.id === +id))

  return (
    <PageContent hasRightBar hasNavigation>
      <Post
        content={post.content}
        author={post.author}
        date={post.date}
        tags={post.tags}
        time={post.time}
        place={post.place}
        activity={post.activity}
      />
    </PageContent>
  )
}

export default SinglePost
