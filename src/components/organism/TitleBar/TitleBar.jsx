import React from 'react'
import styled from 'styled-components'
import { PageWrapper, TitleBarWrapper, Title } from './TitleBar.styles'

export const TitleBar = ({ city }) => {
  return (
    <PageWrapper>
      <TitleBarWrapper>
        <Title>
          Aktualne aktywności w <span>{city}</span>
        </Title>
      </TitleBarWrapper>
    </PageWrapper>
  )
}
