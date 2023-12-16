import { useEffect, useMemo, useState } from 'react'

import Loader from '@/components/atoms/Loader/Loader'
import { AddPostSection } from '@/components/molecules/AddPostSection/AddPostSection'
import { TitleBar } from '@/components/molecules/TitleBar/TitleBar'
import { Dropdown } from '@/components/organism/Dropdown/Dropdown'
import Post from '@/components/organism/Post/Post'
import { PageContent } from '@/components/templates/PageContent/PageContent'
import { getCityFromStorage } from '@/store/api/getCityFromStorage'
import { useGetPostsQuery, useLazyGetFilteredPostsQuery } from '@/store/api/posts'

const Home = () => {
  const { isLoading, isSuccess } = useGetPostsQuery()

  const [city, setCity] = useState(() => getCityFromStorage())

  const [hasCityChanged, setHasCityChanged] = useState(false)

  const handleCityChanged = () => {
    const storedCity = localStorage.getItem('city')
    setCity(storedCity)
  }

  // useEffect(() => {
  //   handleCityChanged()
  // }, [])

  useEffect(() => {
    if (hasCityChanged || city !== localStorage.getItem('city')) {
      handleCityChanged()
    }
  }, [hasCityChanged, city])

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
      <TitleBar isBold hasCityChanged={setHasCityChanged}>
        Odkrywaj aktualne spotkania w <span>{city}</span>
      </TitleBar>
      <Dropdown setFilterOptions={setFilterOptions} filterOptions={filterOptions} />
      {isLoading && <Loader isCentered />}
      {!isLoading && isSuccess && posts && posts.map((post) => <Post {...post} key={post.id} />)}
    </PageContent>
  )
}

export default Home
