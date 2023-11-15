import { ReactComponent as UsersIcon } from '@/assets/icons/user-check.svg'

import { Wrapper } from './Alert.styles'

export const Alert = ({ message }) => {
  return (
    <Wrapper>
      <UsersIcon />
      {message}
    </Wrapper>
  )
}
