import React from 'react'
import { useParams } from 'react-router'

import Loader from '@/components/atoms/Loader/Loader'
import Post from '@/components/organism/Post/Post'
import { PageContent } from '@/components/templates/PageContent/PageContent'
import { useGetOnePostQuery } from '@/store/api/posts'

import { StyledTitle } from './SunglePost.styles'

const SinglePost = () => {
  const { id } = useParams()
  const { data: post, isLoading, isSuccess } = useGetOnePostQuery(id)

  return (
    <PageContent hasRightBar hasNavigation>
      {isLoading && <Loader isCentered />}
      {id !== undefined && isSuccess && post ? (
        <Post {...post} />
      ) : (
        <StyledTitle>Post not found</StyledTitle>
      )}
    </PageContent>
  )
}

export default SinglePost
