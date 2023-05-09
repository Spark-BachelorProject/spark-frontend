import React from 'react'

import Dot from '@/components/atoms/Dot/Dot'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'

import { Details, Wrapper } from './Comment.styles'

const Comment = ({ children, userName, howLongAgo }) => {
  return (
    <Wrapper>
      <Details>
        <Thumbnail />
        <div>
          <Text isBold>{userName}</Text>
          <Dot />
          <Text>{howLongAgo} min temu</Text>
        </div>
      </Details>
      <Text>{children}</Text>
    </Wrapper>
  )
}

export default Comment
