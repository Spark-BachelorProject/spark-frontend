import React, { useEffect, useState } from 'react'

import Loader from '@/components/atoms/Loader/Loader'
import { AddPostSection } from '@/components/molecules/AddPostSection/AddPostSection'
import { TitleBar } from '@/components/molecules/TitleBar/TitleBar'
import { Dropdown } from '@/components/organism/Dropdown/Dropdown'
import Post from '@/components/organism/Post/Post'
import { PageContent } from '@/components/templates/PageContent/PageContent'
import { useGetPostsQuery } from '@/store/api/posts'

const Home = () => {
  const { data, isLoading, isSuccess } = useGetPostsQuery()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (!isLoading) {
      setPosts(data)
    }
  }, [data, isLoading])

  return (
    <PageContent hasNavigation hasRightBar>
      <AddPostSection />
      <TitleBar>
        To się dzieje w <strong>Lublinie</strong>!
      </TitleBar>
      <Dropdown data={data} setPosts={setPosts} />
      {isLoading && <Loader isCentered />}
      {!isLoading && isSuccess && posts.map((post) => <Post {...post} key={post.id} />)}
    </PageContent>
  )
}

export default Home
