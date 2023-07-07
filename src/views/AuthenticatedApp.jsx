import React from 'react'

import PropTypes from 'prop-types'

import HeaderSearchBar from '@/components/organism/HeaderSearchBar/HeaderSearchBar'
import NavigationBar from '@/components/organism/NavigationBar/NavigationBar'

const AuthenticatedApp = ({ children }) => {
  return (
    <>
      <HeaderSearchBar />
      {children}
      <NavigationBar />
    </>
  )
}

AuthenticatedApp.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthenticatedApp
