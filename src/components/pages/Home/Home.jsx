import React from 'react'
import { TitleBar } from '@/components/molecules/TitleBar/TitleBar'
import { Dropdown } from '@/components/organism/Dropdown/Dropdown'
import { PageContent } from '@/components/atoms/PageContent/PageContent'
import { DekstopNavigationBar } from '@/components/organism/DekstopNavigationBar/DekstopNavigationBar'

const Home = () => {
  return (
    <PageContent>
      <TitleBar city="Lublinie" />
      <Dropdown />
    </PageContent>
  )
}

export default Home
