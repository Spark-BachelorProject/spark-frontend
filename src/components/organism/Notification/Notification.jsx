import React from 'react'
import { StyledThumbnail } from '@/components/molecules/SavedPost/SavedPost.styles'
import {
  Wrapper,
  StyledAttendingIcon,
  StyledCanceledIcon,
  StyledCommentIcon,
  StyledSmallText,
  StyledText,
  ThumbnailIconWrapper,
} from './Notification.styles'

//TODO: Add: 1. counter, 2. unread notifications (also using counter)

export const Notification = ({ name, type, time }) => {
  return (
    <Wrapper>
      <ThumbnailIconWrapper>
        <StyledThumbnail />
        {type === 'attend' ? (
          <StyledAttendingIcon />
        ) : type === 'comment' ? (
          <StyledCommentIcon />
        ) : (
          <StyledCanceledIcon />
        )}
      </ThumbnailIconWrapper>

      <div>
        <StyledText>
          {name}{' '}
          {type === 'attend'
            ? 'weźmie udział w Twoim spotkaniu!'
            : type === 'comment'
            ? 'skomentował(a) Twój post.'
            : 'odwołał(a) spotkanie w którym miałeś wziąć udział.'}
        </StyledText>
        <StyledSmallText>
          {time < 60 ? `${time} min temu` : `${Math.floor(time / 60)}h temu`}{' '}
        </StyledSmallText>
      </div>
    </Wrapper>
  )
}
