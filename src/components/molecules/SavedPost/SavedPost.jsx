import Avvvatars from 'avvvatars-react'

import Dot from '@/components/atoms/Dot/Dot'
import { capitalize, getInitials } from '@/helpers/stringOperations'
import { truncateString } from '@/helpers/truncateString'

import {
  FirstRowText,
  NameActivityWrapper,
  SecondRowText,
  StyledCanceledIcon,
  TextWrapper,
  Wrapper,
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
      <Avvvatars value={getInitials(firstName, lastName)} size={37} />

      <TextWrapper>
        {isCancelled ? <StyledCanceledIcon /> : null}

        <NameActivityWrapper isCancelled>
          <FirstRowText isCancelled>{`${firstName} ${lastName}`}</FirstRowText>
          <Dot />
          <FirstRowText isCancelled>{activity.name}</FirstRowText>
        </NameActivityWrapper>
        <SecondRowText isCancelled>
          {location.name ? `${location.name} - ` : ''} {capitalize(truncateString(description, 10))}
        </SecondRowText>
      </TextWrapper>
    </Wrapper>
  )
}
