import React from 'react'
import {
  Wrapper,
  StyledSmallText,
  StyledText,
  ThumbnailIconWrapper,
  StyledThumbnail,
} from './Notification.styles'
import { ReactComponent as CanceledIcon } from '@/assets/icons/cancel-circle.svg'
import { ReactComponent as CommentIcon } from '@/assets/icons/comment-circle.svg'
import { ReactComponent as AttendIcon } from '@/assets/icons/check-circle.svg'

//TODO: Add: 1. counter, 2. unread notifications (also using counter)

const determineTypeOfNotification = (type) => {
  switch (type) {
    case 'comment':
      return [CommentIcon, 'skomentował(a) Twój post.']
    case 'cancel':
      return [CanceledIcon, 'odwołał(a) spotkanie w którym miałeś wziąć udział.']
    case 'attend':
      return [AttendIcon, 'weźmie udział w Twoim spotkaniu.']
    default:
      break
  }
}

export const Notification = ({ name, type = 'comment', time }) => {
  const [Icon, text] = determineTypeOfNotification(type)

  return (
    <Wrapper>
      <ThumbnailIconWrapper>
        <StyledThumbnail />
        <Icon />
      </ThumbnailIconWrapper>

      <div>
        <StyledText>
          {name} {text}
        </StyledText>
        <StyledSmallText>
          {time < 60 ? `${time} min temu` : `${Math.floor(time / 60)}h temu`}{' '}
        </StyledSmallText>
      </div>
    </Wrapper>
  )
}
