import { ReactComponent as LikeIcon } from '@/assets/icons/like.svg'

import { Wrapper } from './Alert.styles'

export const Alert = ({ message, show, hasIcon }) => {
  return (
    <Wrapper show={show}>
      {message}
      {hasIcon && <LikeIcon />}
    </Wrapper>
  )
}
