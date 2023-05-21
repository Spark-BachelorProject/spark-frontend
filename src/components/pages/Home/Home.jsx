import React from 'react'

import { AddPostDummy } from '@/components/molecules/AddPostDummy/AddPostDummy'
import { TitleBar } from '@/components/molecules/TitleBar/TitleBar'
import { Dropdown } from '@/components/organism/Dropdown/Dropdown'
import Post from '@/components/organism/Post/Post'
import { PageContent } from '@/components/templates/PageContent/PageContent'

const Home = () => {
  return (
    <PageContent hasNavigation hasRightBar>
      <AddPostDummy />
      <TitleBar>
        To się dzieje w <strong>Lublinie</strong>!
      </TitleBar>
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
