import Avvvatars from 'avvvatars-react'

import Dot from '@/components/atoms/Dot/Dot'
import { Text } from '@/components/atoms/Text/Text.styles'
import { formatTimeAgo } from '@/helpers/dateAndTime'

import { Details, Wrapper } from './Comment.styles'

const Comment = ({ children, user: { firstName, lastName, profilePictureUrl }, dateAdded }) => {
  return (
    <Wrapper>
      <Details>
        <Avvvatars value={`${firstName} ${lastName}`} size={23} />
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
