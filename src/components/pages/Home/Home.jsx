import { useEffect, useMemo, useState } from 'react'

import Loader from '@/components/atoms/Loader/Loader'
import { AddPostSection } from '@/components/molecules/AddPostSection/AddPostSection'
import { TitleBar } from '@/components/molecules/TitleBar/TitleBar'
import { Dropdown } from '@/components/organism/Dropdown/Dropdown'
import Post from '@/components/organism/Post/Post'
import { PageContent } from '@/components/templates/PageContent/PageContent'
import { useGetPostsQuery, useLazyGetFilteredPostsQuery } from '@/store/api/posts'

const Home = () => {
  const { isLoading, isSuccess } = useGetPostsQuery()
  const [posts, setPosts] = useState([])
  const [filterOptions, setFilterOptions] = useState({
    activity: 0, // 0 means all activities
    start: '',
    end: '',
  })
  const [trigger, result] = useLazyGetFilteredPostsQuery(filterOptions)

  //this throws warning but it's ok
  const memoizedResult = useMemo(() => result, [result.data, result.isSuccess])

  useEffect(() => {
    if (filterOptions.activity === 0 && filterOptions.start === '' && filterOptions.end === '') {
      // return everything
      trigger(0)
      if (memoizedResult.isSuccess) {
        setPosts(memoizedResult.data)
      }
      return
    } else if (
      filterOptions.activity === 0 &&
      filterOptions.start !== '' &&
      filterOptions.end !== ''
    ) {
      // return everything between start and end
      trigger({
        start: filterOptions.start,
        end: filterOptions.end,
      })
      if (memoizedResult.isSuccess) {
        setPosts(memoizedResult.data)
      }
      return
    }

    trigger(filterOptions)

    if (memoizedResult.isSuccess) {
      setPosts(memoizedResult.data)
    }
  }, [filterOptions, memoizedResult, trigger])

  return (
    <PageContent hasNavigation hasRightBar>
      <AddPostSection />
      <TitleBar>
        To się dzieje w <strong>Lublinie</strong>!
      </TitleBar>
      <Dropdown setFilterOptions={setFilterOptions} filterOptions={filterOptions} />
      {isLoading && <Loader isCentered />}
      {!isLoading && isSuccess && posts && posts.map((post) => <Post {...post} key={post.id} />)}
    </PageContent>
  )
}

export default Home
