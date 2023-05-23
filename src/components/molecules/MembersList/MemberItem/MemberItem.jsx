import React from 'react'

import PropTypes from 'prop-types'

import { Text } from '@/components/atoms/Text/Text.styles'
import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'

import { Wrapper } from './MemberItem.styles'

// TODO: add picture
const MemberItem = ({ firstName, lastName }) => {
  return (
    <Wrapper>
      <Thumbnail />
      <Text>{`${firstName} ${lastName}`}</Text>
    </Wrapper>
  )
}

MemberItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}

export default MemberItem
