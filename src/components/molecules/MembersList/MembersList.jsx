import React from 'react'

import PropTypes from 'prop-types'

import MemberItem from './MemberItem/MemberItem'
import { Wrapper } from './MembersList.styles'

const MembersList = ({ members }) => {
  return (
    <Wrapper>
      {members.map(({ firstName, lastName }, i) => (
        <MemberItem key={i} firstName={firstName} lastName={lastName} />
      ))}
    </Wrapper>
  )
}

//TODO: Remember about src!!!
MembersList.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    })
  ),
}

export default MembersList
