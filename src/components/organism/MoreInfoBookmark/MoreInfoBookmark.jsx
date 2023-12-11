import { ReactComponent as ScissorsIcon } from '@/assets/icons/bin.svg'
import { useDeleteBookmarkedPostsMutation } from '@/store/api/user'

import { StyledText, Wrapper } from './MoreInfoBookmark.styles'

export const MoreInfoBookmark = () => {
  const [deleteBookmarkedPosts] = useDeleteBookmarkedPostsMutation()

  const handleDeleteBookmarkedPosts = async () => {
    try {
      await deleteBookmarkedPosts()
    } catch (error) {
      console.error('Error deleting bookmarked posts:', error)
    }
  }

  return (
    <Wrapper>
      {/* <StyledText>
        <BinIcon />
        Oznacz wszystkie jako przeczytane
      </StyledText> */}
      <StyledText onClick={handleDeleteBookmarkedPosts}>
        <ScissorsIcon />
        Wyczyść zapisane posty
      </StyledText>
    </Wrapper>
  )
}
