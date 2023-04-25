import React from 'react'
import { TitleBar } from '@/components/molecules/TitleBar/TitleBar'
import { Dropdown } from '@/components/organism/Dropdown/Dropdown'
import Post from '@/components/organism/Post/Post'
import { PageContent } from '@/components/templates/PageContent/PageContent'
import { AddPostDummy } from '@/components/molecules/AddPostDummy/AddPostDummy'

const Home = () => {
  return (
    <PageContent hasNavigation hasRightBar>
      <AddPostDummy />
      <TitleBar city="Lublinie" />
      <Dropdown />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </PageContent>
  )
}

export default Home
