import React from 'react'
import { PulseLoader } from 'react-spinners'

import { theme } from '@/assets/styles/theme'

const Loader = ({ isCentered }) => {
  return (
    <PulseLoader
      color={theme.colors.buttonBg}
      style={isCentered ? { display: 'flex', justifyContent: 'center' } : {}}
    />
  )
}

export default Loader
