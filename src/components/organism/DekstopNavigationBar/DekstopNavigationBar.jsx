import React from 'react'

import { FeedbackSection } from '@/components/molecules/FeedbackSection/FeedbackSection'

import NavigationSection from '../NavigationSection/NavigationSection'
import SocialsSection from '../SocialsSection/SocialsSection'
import { Wrapper } from './DesktopNavigationBar.styles'

export const DekstopNavigationBar = () => {
  return (
    <Wrapper>
      <NavigationSection />
      <SocialsSection />
      <FeedbackSection />
    </Wrapper>
  )
}
