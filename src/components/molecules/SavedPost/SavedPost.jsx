import Dot from '@/components/atoms/Dot/Dot'
import React from 'react'
import {
  Wrapper,
  TextWrapper,
  NameActivityWrapper,
  FirstRowText,
  SecondRowText,
  StyledThumbnail,
  StyledCanceledIcon,
} from './SavedPost.styles'

export const SavedPost = ({ isCancelled, name, activity, place, adress }) => {
  return (
    <Wrapper>
      <StyledThumbnail />
      <TextWrapper>
        {isCancelled ? <StyledCanceledIcon /> : null}
        {/* {isCancelled ? <CancelledText>Spotkanie odwołane</CancelledText> : null} */}

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
