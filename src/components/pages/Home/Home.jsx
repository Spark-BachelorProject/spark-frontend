import React from 'react'
import { TitleBar } from '@/components/organism/TitleBar/TitleBar'
import { Dropdown } from '@/components/atoms/Dropdown/Dropdown'

const Home = () => {
  return (
    <>
      <TitleBar city="Lublinie" />
      <Dropdown />
    </>
  )
}

export default Home
