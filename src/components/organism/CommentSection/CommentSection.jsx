import React, { useState } from 'react'

import PropTypes from 'prop-types'

import { ReactComponent as ExpandVectorIcon } from '@/assets/icons/expand-vector.svg'
import { ReactComponent as SendVectorIcon } from '@/assets/icons/send-vector.svg'
import { Button } from '@/components/atoms/Button/Button.styles'
import Input from '@/components/atoms/Input/Input'
import Comment from '@/components/molecules/Comment/Comment'

import { CommentForm, Comments, StyledText } from './CommentSection.styles'

const CommentSection = ({ handleAddComment, inputValue, setInputValue, comments }) => {
  const [commentSectionIsOpen, setCommentSectionIsOpen] = useState(!(comments.length > 2))
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
        <Button isGray>
          <SendVectorIcon />
        </Button>
      </CommentForm>
      <StyledText
        onClick={() => setCommentSectionIsOpen((prev) => !prev)}
        commentSectionIsOpen={commentSectionIsOpen}
        isComments={!!comments.length}
      >
        {!comments.length
          ? 'Brak komentarzy'
          : (commentSectionIsOpen ? 'Schowaj' : 'Pokaż') + ` komentarze (${comments.length})`}
        {comments.length ? <ExpandVectorIcon /> : null}
      </StyledText>
      {commentSectionIsOpen && comments.length ? (
        <Comments>
          {comments.map((comment) => (
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
      dateAdded: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  handleAddComment: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
}

export default CommentSection
