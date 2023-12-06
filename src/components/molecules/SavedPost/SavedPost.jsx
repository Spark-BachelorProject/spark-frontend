import React from 'react'

import Dot from '@/components/atoms/Dot/Dot'
import { capitalize } from '@/helpers/stringOperations'

import {
  Wrapper,
  TextWrapper,
  NameActivityWrapper,
  FirstRowText,
  SecondRowText,
  StyledThumbnail,
  StyledCanceledIcon,
} from './SavedPost.styles'

export const SavedPost = ({
  creator: { firstName, lastName, profilePicture },
  activity,
  location,
  description,
  id,
  isCancelled = false,
  handleOpenSinglePost,
}) => {
  return (
    <Wrapper onClick={() => handleOpenSinglePost(id)}>
      <StyledThumbnail url={profilePicture} />
      <TextWrapper>
        {isCancelled ? <StyledCanceledIcon /> : null}

        <NameActivityWrapper isCancelled>
          <FirstRowText isCancelled>{`${firstName} ${lastName}`}</FirstRowText>
          <Dot />
          <FirstRowText isCancelled>{activity.name}</FirstRowText>
        </NameActivityWrapper>
        <SecondRowText isCancelled>
          {location.name ? `${location.name} - ` : ''} {capitalize(description)}
        </SecondRowText>
      </TextWrapper>
    </Wrapper>
  )
}
