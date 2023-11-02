import React from 'react'
import { useSelector } from 'react-redux'

import Loader from '@/components/atoms/Loader/Loader'
import { AddPostSection } from '@/components/molecules/AddPostSection/AddPostSection'
import { TitleBar } from '@/components/molecules/TitleBar/TitleBar'
import { Dropdown } from '@/components/organism/Dropdown/Dropdown'
import Post from '@/components/organism/Post/Post'
import { PageContent } from '@/components/templates/PageContent/PageContent'
import { useGetPostsQuery } from '@/store/api/posts'

const Home = () => {
  // const posts = useSelector((state) => state.posts)

  const { data: posts, isLoading } = useGetPostsQuery()

  return (
    <PageContent hasNavigation hasRightBar>
      <AddPostSection />
      <TitleBar>
        To się dzieje w <strong>Lublinie</strong>!
      </TitleBar>
      <Dropdown />
      {isLoading && <Loader isCentered />}
      {!isLoading && posts.map((post) => <Post {...post} key={post.id} />)}
    </PageContent>
  )
}

export default Home
