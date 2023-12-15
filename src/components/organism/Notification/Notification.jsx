import { useState } from 'react'

import { ReactComponent as CanceledIcon } from '@/assets/icons/cancel-circle.svg'
import { ReactComponent as AttendIcon } from '@/assets/icons/check-circle.svg'
import { ReactComponent as CommentIcon } from '@/assets/icons/comment-circle.svg'

import {
  StyledSmallText,
  StyledText,
  StyledThumbnail,
  TextWrapper,
  ThumbnailIconWrapper,
  Wrapper,
} from './Notification.styles'

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

export const Notification = ({ name, type = 'comment', time, isRead = false }) => {
  const [isReaded, setIsReaded] = useState(isRead)
  const [Icon, text] = determineTypeOfNotification(type)

  return (
    <Wrapper isRead={isReaded} onClick={() => setIsReaded(true)}>
      <ThumbnailIconWrapper>
        <StyledThumbnail />
        <Icon />
      </ThumbnailIconWrapper>

      <TextWrapper>
        <StyledText>
          {name} {text}
        </StyledText>
        <StyledSmallText>
          {time < 60 ? `${time} min temu` : `${Math.floor(time / 60)}h temu`}{' '}
        </StyledSmallText>
      </TextWrapper>
    </Wrapper>
  )
}
