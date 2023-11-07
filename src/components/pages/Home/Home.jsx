import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Loader from '@/components/atoms/Loader/Loader'
import { AddPostSection } from '@/components/molecules/AddPostSection/AddPostSection'
import { TitleBar } from '@/components/molecules/TitleBar/TitleBar'
import { Dropdown } from '@/components/organism/Dropdown/Dropdown'
import Post from '@/components/organism/Post/Post'
import { PageContent } from '@/components/templates/PageContent/PageContent'
import { useGetPostsQuery, useLazyGetFilteredPostsQuery } from '@/store/api/posts'

const Home = () => {
  // const posts = useSelector((state) => state.posts)

  const { data, isLoading, isSuccess } = useGetPostsQuery()
  const [posts, setPosts] = useState([])
  const [filteredString, setFilteredString] = useState('')
  const [trigger, result] = useLazyGetFilteredPostsQuery()
  useEffect(() => {
    if (!isLoading) {
      setPosts(data)
    }
  }, [data, isLoading, filteredString])

  console.log(filteredString, 'filteredString')

  const onHandleFilters = () => {
    console.log(filteredString)
    // its return everything
    if (filteredString === 'activity=0') {
      setPosts(data)
      return
    }

    trigger(filteredString)
    console.log(result.data)
    if (result.isSuccess) {
      console.log('result.data', result, filteredString)
      setPosts(result.data)
    }
  }

  useEffect(() => {
    console.log(filteredString)
    // its return everything
    if (filteredString === 'activity=0') {
      setPosts(data)
      return
    }

    trigger(filteredString)
    console.log(result.data)
    if (result.isSuccess) {
      console.log('result.data', result, filteredString)
      setPosts(result.data)
    }
  }, [filteredString])

  useEffect(() => {
    if (result.isSuccess && filteredString !== 'activity=0') {
      setPosts(result?.data)
    }
  }, [result, onHandleFilters, data])

  // useEffect(() => {
  //   console.log('result.data', result.data)
  //   if (result.isSuccess) {
  //     console.log('result.data', result.data)
  //   }
  //   setPosts(result.data)
  // }, [result])

  return (
    <PageContent hasNavigation hasRightBar>
      <AddPostSection />
      <TitleBar>
        To się dzieje w <strong>Lublinie</strong>!
      </TitleBar>
      <Dropdown
        filteredString={filteredString}
        setFilteredString={setFilteredString}
        onHandleFilters={onHandleFilters}
      />
      {isLoading && <Loader isCentered />}
      {!isLoading && isSuccess && posts.map((post) => <Post {...post} key={post.id} />)}
    </PageContent>
  )
}

export default Home
