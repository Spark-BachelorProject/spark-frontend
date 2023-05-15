import React from 'react'
import { Provider } from 'react-redux'

import PropTypes from 'prop-types'

import { store } from '@/store'

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

StoreProvider.propTypes = {
  children: PropTypes.node,
}

export default StoreProvider
