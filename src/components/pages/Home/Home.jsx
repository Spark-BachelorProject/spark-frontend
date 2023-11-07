import React, { useEffect, useMemo, useState } from 'react'

import Loader from '@/components/atoms/Loader/Loader'
import { AddPostSection } from '@/components/molecules/AddPostSection/AddPostSection'
import { TitleBar } from '@/components/molecules/TitleBar/TitleBar'
import { Dropdown } from '@/components/organism/Dropdown/Dropdown'
import Post from '@/components/organism/Post/Post'
import { PageContent } from '@/components/templates/PageContent/PageContent'
import { useGetPostsQuery, useLazyGetFilteredPostsQuery } from '@/store/api/posts'

// TODO: search about useMemo and useCallback and spearate this to Dropdown
const Home = () => {
  const { data, isLoading, isSuccess } = useGetPostsQuery()
  const [posts, setPosts] = useState([])
  const [filteredString, setFilteredString] = useState('')
  const [trigger, result] = useLazyGetFilteredPostsQuery()

  const memoizedResult = useMemo(() => result, [result.data, result.isSuccess])

  useEffect(() => {
    if (!isLoading) {
      setPosts(data)
    }
  }, [data, isLoading])

  useEffect(() => {
    // its return everything
    if (filteredString === 'activity=0') {
      setPosts(data)
      return
    } else {
      // filter data
      trigger(filteredString)
    }
    if (memoizedResult.isSuccess) {
      setPosts(memoizedResult.data)
    } else if (filteredString !== 'activity=0') {
      setPosts(data)
    }
  }, [filteredString, memoizedResult, data, trigger, setPosts])

  return (
    <PageContent hasNavigation hasRightBar>
      <AddPostSection />
      <TitleBar>
        To się dzieje w <strong>Lublinie</strong>!
      </TitleBar>
      <Dropdown setFilteredString={setFilteredString} />
      {isLoading && <Loader isCentered />}
      {!isLoading && isSuccess && posts.map((post) => <Post {...post} key={post.id} />)}
    </PageContent>
  )
}

export default Home
