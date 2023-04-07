import React from 'react'
import { TitleBar } from '@/components/molecules/TitleBar/TitleBar'
import { Dropdown } from '@/components/organism/Dropdown/Dropdown'
import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 650px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.m}) {
    margin-left: 250px; //same as right navbar
    width: auto;
    max-width: 684px;
    position: relative;
    float: left;
    left: 40px;
  }
`

const Home = () => {
  return (
    <Wrapper>
      <TitleBar city="Lublinie" />
      <Dropdown />
    </Wrapper>
  )
}

export default Home
