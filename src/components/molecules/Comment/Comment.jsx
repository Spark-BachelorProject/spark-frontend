import React from 'react'

import Dot from '@/components/atoms/Dot/Dot'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'
import { formatTimeAgo } from '@/helpers/dateAndTime'

import { Details, Wrapper } from './Comment.styles'

const Comment = ({ children, user: { firstName, lastName, profilePictureUrl }, dateAdded }) => {
  return (
    <Wrapper>
      <Details>
        <Thumbnail alt={`Thumbnail of ${firstName} ${lastName}`} src={profilePictureUrl} />
        <div>
          <Text isBold>
            {firstName} {lastName}
          </Text>
          <Dot />
          <Text>{formatTimeAgo(dateAdded)}</Text>
        </div>
      </Details>
      <Text>{children}</Text>
    </Wrapper>
  )
}

export default Comment
