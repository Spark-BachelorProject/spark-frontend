import { ReactComponent as ScissorsIcon } from '@/assets/icons/bin.svg'
import { MoreInfoText } from '@/components/atoms/MoreInfoText/MoreInfoText.styles'
import { MoreInfoWrapper } from '@/components/atoms/MoreInfoWrapper/MoreInfoWrapper.styles'
import { useDeleteBookmarkedPostsMutation } from '@/store/api/user'

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
    <MoreInfoWrapper>
      {/* <StyledText>
        <BinIcon />
        Oznacz wszystkie jako przeczytane
      </StyledText> */}
      <MoreInfoText onClick={handleDeleteBookmarkedPosts}>
        <ScissorsIcon />
        Wyczyść zapisane posty
      </MoreInfoText>
    </MoreInfoWrapper>
  )
}
