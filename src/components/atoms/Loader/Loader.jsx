import { BeatLoader } from 'react-spinners'

import { theme } from '@/assets/styles/theme'

const Loader = ({ isCentered }) => {
  return (
    <BeatLoader
      color={theme.colors.text}
      size={10}
      style={isCentered ? { display: 'flex', justifyContent: 'center' } : {}}
    />
  )
}

export default Loader
