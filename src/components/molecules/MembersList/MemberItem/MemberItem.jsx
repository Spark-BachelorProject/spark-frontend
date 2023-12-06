import Avvvatars from 'avvvatars-react'
import PropTypes from 'prop-types'

import { Text } from '@/components/atoms/Text/Text.styles'

import { Wrapper } from './MemberItem.styles'

// TODO: add picture
const MemberItem = ({ firstName, lastName }) => {
  return (
    <Wrapper>
      <Avvvatars value={`${firstName} ${lastName}`} size={23} />
      <Text>{`${firstName} ${lastName}`}</Text>
    </Wrapper>
  )
}

MemberItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}

export default MemberItem
