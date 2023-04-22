import React from 'react'
import { Wrapper } from './DesktopNavigationBar.styles'
import SocialsSection from '../SocialsSection/SocialsSection'
import NavigationSection from '../NavigationSection/NavigationSection'
import { FeedbackSection } from '@/components/molecules/FeedbackSection/FeedbackSection'

export const DekstopNavigationBar = () => {
  return (
    <Wrapper>
      <NavigationSection />
      <SocialsSection />
      <FeedbackSection />
    </Wrapper>
  )
}
