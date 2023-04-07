import React from 'react'
import { TitleBar } from '@/components/molecules/TitleBar/TitleBar'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import Post from '@/components/organism/Post/Post'

const Home = () => {
  return (
    <>
      <TitleBar city="Lublinie" />
      <Dropdown />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  )
}

export default Home
