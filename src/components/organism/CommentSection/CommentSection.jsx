import { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import { ReactComponent as ExpandVectorIcon } from '@/assets/icons/expand-vector.svg'
import { ReactComponent as SendVectorIcon } from '@/assets/icons/send-vector.svg'
import { Button } from '@/components/atoms/Buttons/Button.styles'
import Input from '@/components/atoms/Input/Input'
import Comment from '@/components/molecules/Comment/Comment'

import { CommentForm, Comments, StyledText } from './CommentSection.styles'

const CommentSection = ({ handleAddComment, inputValue, setInputValue, comments }) => {
  const [commentSectionIsOpen, setCommentSectionIsOpen] = useState(false)
  const [initialLoad, setInitialLoad] = useState(true)
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if (commentSectionIsOpen) {
      setInitialLoad(false)
    }
  }, [commentSectionIsOpen])

  useEffect(() => {
    setDisabled(inputValue === '')
  }, [inputValue])

  const sortedComments = [...comments].sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded))
  const displayedComments = initialLoad
    ? sortedComments.slice(0, 3)
    : commentSectionIsOpen
    ? sortedComments
    : []

  return (
    <>
      <CommentForm onSubmit={handleAddComment}>
        <Input
          placeholder="Napisz komentarz..."
          isEmptyIcon
          isAlwaysVisibleIcon
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button isGray disabled={disabled}>
          <SendVectorIcon />
        </Button>
      </CommentForm>
      <StyledText
        onClick={() => setCommentSectionIsOpen((prev) => !prev)}
        commentSectionIsOpen={commentSectionIsOpen}
        comments={!!comments.length}
      >
        {!comments.length
          ? 'Skomentuj jako pierwszy'
          : (commentSectionIsOpen || comments.length <= 3 ? 'Schowaj' : 'Pokaż wszystkie') +
            ` komentarze (${comments.length})`}
        {comments.length ? <ExpandVectorIcon /> : null}
      </StyledText>
      {displayedComments.length ? (
        <Comments>
          {displayedComments.map((comment) => (
            <Comment key={comment.id} user={comment.user} dateAdded={comment.dateAdded}>
              {comment.commentText}
            </Comment>
          ))}
        </Comments>
      ) : null}
    </>
  )
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      commentText: PropTypes.string.isRequired,
      dateAdded: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  handleAddComment: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
}

export default CommentSection
