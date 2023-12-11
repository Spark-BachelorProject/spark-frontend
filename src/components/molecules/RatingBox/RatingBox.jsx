import { Text } from '@/components/atoms/Text/Text.styles'
import { getIconUrlInIconsFolder } from '@/components/pages/Map/customIcons'

import { Wrapper } from './RatingBox.styles'

export const RatingBox = ({ icon, rating, isSelected, onClick }) => {
  if (!icon) {
    return null
  }

  return (
    <Wrapper isSelected={isSelected} onClick={onClick}>
      <img src={getIconUrlInIconsFolder(icon)} height={66} alt="test" />
      <Text isBold>{rating}</Text>
    </Wrapper>
  )
}
