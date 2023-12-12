import React from 'react'

import { DividerLabel } from '@/components/atoms/DividerLabel/DividerLabel.styles'
import { FeedbackSection } from '@/components/molecules/FeedbackSection/FeedbackSection'

import NavigationSection from '../NavigationSection/NavigationSection'
import SocialsSection from '../SocialsSection/SocialsSection'
import { Wrapper } from './DesktopNavigationBar.styles'

export const DekstopNavigationBar = () => {
  return (
    <Wrapper>
      <NavigationSection />
      <DividerLabel isSolid />
      <SocialsSection />
      <DividerLabel isSolid />
      <FeedbackSection />
    </Wrapper>
  )
}
