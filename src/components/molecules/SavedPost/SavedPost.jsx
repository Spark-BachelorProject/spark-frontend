import { Text } from '@/components/atoms/Text/Text.style'
import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.style'
import Title from '@/components/atoms/Title/Title'
import React from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 20px 0 0 0;
`

export const StyledThumbnail = styled(Thumbnail)`
  height: 44px;
  width: 44px;
`

export const StyledText = styled(Text)`
  margin: -2px 0 0 0;
  font-size: 14px;
`

export const StyledSmallText = styled(Text)`
  margin: -2px 0 0 0;
  font-size: 12px;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const SavedPost = () => {
  return (
    <Wrapper>
      <StyledThumbnail />
      <TextWrapper>
        <Title>Andrzej Kowal</Title>
        <StyledText>Siatkówka - Politechnika Lubelska</StyledText>
        <StyledText>Kraśnicka 12</StyledText>
      </TextWrapper>
    </Wrapper>
  )
}
