import Dot from '@/components/atoms/Dot/Dot'
import React from 'react'
import {
  Wrapper,
  TextWrapper,
  CancelledText,
  NameActivityWrapper,
  FirstRowText,
  SecondRowText,
  StyledThumbnail,
} from './SavedPost.styles'

export const SavedPost = ({ isCancelled, name, activity, place, adress }) => {
  return (
    <Wrapper>
      <StyledThumbnail />
      <TextWrapper>
        {isCancelled ? <CancelledText>Odwołane</CancelledText> : null}
        <NameActivityWrapper isCancelled={isCancelled}>
          <FirstRowText isCancelled={isCancelled}>{name}</FirstRowText>
          <Dot />
          <FirstRowText isCancelled={isCancelled}>{activity}</FirstRowText>
        </NameActivityWrapper>
        <SecondRowText isCancelled={isCancelled}>
          {place} - {adress}
        </SecondRowText>
      </TextWrapper>
    </Wrapper>
  )
}
