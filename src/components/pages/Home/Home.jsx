import React from 'react'
import { TitleBar } from '@/components/molecules/TitleBar/TitleBar'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'

const Home = () => {
  return (
    <>
      <TitleBar city="Lublinie" />
      <Dropdown />
    </>
  )
}

export default Home
