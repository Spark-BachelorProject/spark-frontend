import { ReactComponent as CopyIcon } from '@/assets/icons/clipboard.svg'
import { Text } from '@/components/atoms/Text/Text.styles'

import { Wrapper } from './MoreInfoNotifications.styles'

export const MoreInfoNotifications = () => {
  return (
    <Wrapper>
      <Text>
        <CopyIcon />
        Oznacz wszystkie jako przeczytane
      </Text>
    </Wrapper>
  )
}
