import React from 'react'
import { Wrapper } from './DesktopNavigationBar.styles'
import SocialsSection from '../SocialsSection/SocialsSection'
import NavigationSection from '../NavigationSection/NavigationSection'

export const DekstopNavigationBar = () => {
  return (
    <Wrapper>
      <NavigationSection />
      <SocialsSection />
    </Wrapper>
  )
}
