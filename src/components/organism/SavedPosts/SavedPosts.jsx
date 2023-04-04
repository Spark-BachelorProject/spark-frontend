import Title from '@/components/atoms/Title/Title'
import React from 'react'
import styled from 'styled-components'
import { SavedPost } from '@/components/molecules/SavedPost/SavedPost'
import { ReactComponent as MoreInfoIcon } from '@/assets/icons/three-dots.svg'

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 14px;
`
export const HeadingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const StyledMoreInfoIcon = styled(MoreInfoIcon)`
  margin-left: auto;
  cursor: pointer;
  scale: 0.8;
  & path {
    stroke: ${({ theme }) => theme.colors.textHeader};
  }
`

export const SavedPosts = () => {
  return (
    <Wrapper>
      <HeadingWrapper>
        <Title>Zapisane posty</Title>
        <StyledMoreInfoIcon />
      </HeadingWrapper>
      <SavedPost />
    </Wrapper>
  )
}
