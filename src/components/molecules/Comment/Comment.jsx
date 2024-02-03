import Avvvatars from 'avvvatars-react'

import { Text } from '@/components/atoms/Text/Text.styles'
import { formatTimeAgo } from '@/helpers/dateAndTime'
import { getInitials } from '@/helpers/stringOperations'

import { Details, StyledText, Wrapper } from './Comment.styles'

const Comment = ({ children, user: { firstName, lastName }, dateAdded }) => {
  return (
    <Wrapper>
      <Details>
        <Avvvatars value={getInitials(firstName, lastName)} size={23} />
        <div>
          <Text isBold>
            {firstName} {lastName}
          </Text>
          <StyledText>{formatTimeAgo(dateAdded)}</StyledText>
        </div>
      </Details>
      <Text>{children}</Text>
    </Wrapper>
  )
}

export default Comment
