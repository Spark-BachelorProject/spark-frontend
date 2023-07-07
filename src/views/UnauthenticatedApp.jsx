import React from 'react'

import PropTypes from 'prop-types'

import UnauthenticatedFooter from '@/components/molecules/UnauthenticatedFooter/UnauthenticatedFooter'
import UnauthenticatedContent from '@/components/templates/UnauthenticatedContent/UnauthenticatedContent'

const UnauthenticatedApp = ({ children }) => {
  return (
    <UnauthenticatedContent>
      {children}
      <UnauthenticatedFooter />
    </UnauthenticatedContent>
  )
}

UnauthenticatedApp.propTypes = {
  children: PropTypes.node.isRequired,
}

export default UnauthenticatedApp
