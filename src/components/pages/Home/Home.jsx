import React from 'react'
import { TitleBar } from '@/components/molecules/TitleBar/TitleBar'
import { Dropdown } from '@/components/organism/Dropdown/Dropdown'
import { PageContent } from '@/components/atoms/PageContent/PageContent'

const Home = () => {
  return (
    <PageContent>
      <TitleBar city="Lublinie" />
      <Dropdown />
    </PageContent>
  )
}

export default Home
