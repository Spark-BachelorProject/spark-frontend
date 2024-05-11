import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import Loader from '@/components/atoms/Loader/Loader'
import { AddPostSection } from '@/components/molecules/AddPostSection/AddPostSection'
import { TitleBar } from '@/components/molecules/TitleBar/TitleBar'
import { Dropdown } from '@/components/organism/Dropdown/Dropdown'
import Post from '@/components/organism/Post/Post'
import { PageContent } from '@/components/templates/PageContent/PageContent'
import { useGetPostsQuery, useLazyGetFilteredPostsQuery } from '@/store/api/posts'
import { selectCity } from '@/store/city/citySlice'

const Home = () => {
  const selectedCity = useSelector(selectCity)

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
    let filterString = "";

    if (filterOptions.start) {
        filterString += "dateStart>'" + filterOptions.start + "';";
    }
    
    if (filterOptions.end) {
        filterString += "dateEnd<'" + filterOptions.end + "';";
    }
    
    if (filterOptions.activity) {
        filterString += "activity.id=" + filterOptions.activity + ";";
    }

    // todo: add pagination
    filterString ? trigger({ filter: filterString }) : trigger(0);

    if (memoizedResult.isSuccess) {
      setPosts(memoizedResult.data)
    }
  }, [filterOptions, memoizedResult, trigger])

  return (
    <PageContent hasNavigation hasRightBar>
      <AddPostSection />
      <TitleBar>
        Odkrywaj aktualne spotkania w <span>{selectedCity}</span>
      </TitleBar>
      <Dropdown setFilterOptions={setFilterOptions} filterOptions={filterOptions} />
      {isLoading && <Loader isCentered />}
      {!isLoading && isSuccess && posts && posts.map((post) => <Post {...post} key={post.id} />)}
    </PageContent>
  )
}

export default Home
