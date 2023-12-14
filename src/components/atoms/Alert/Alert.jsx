import { ReactComponent as LikeIcon } from '@/assets/icons/like.svg'

import { Wrapper } from './Alert.styles'

export const Alert = ({ message, show }) => {
  return (
    <Wrapper show={show}>
      <LikeIcon />
      {message}
    </Wrapper>
  )
}
