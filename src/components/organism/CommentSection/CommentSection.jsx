import React from 'react'

import PropTypes from 'prop-types'

import { ReactComponent as ExpandVectorIcon } from '@/assets/icons/expand-vector.svg'
import { ReactComponent as SendVectorIcon } from '@/assets/icons/send-vector.svg'
import { Button } from '@/components/atoms/Button/Button.styles'
import Input from '@/components/atoms/Input/Input'
import Comment from '@/components/molecules/Comment/Comment'

import { CommentForm, Comments, StyledText } from './CommentSection.styles'

const CommentSection = ({
  handleAddComment,
  inputValue,
  setInputValue,
  comments = [],
  commentSectionIsOpen,
  setCommentSectionIsOpen,
}) => {
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
      >
        {commentSectionIsOpen ? 'Schowaj' : 'Pokaż'} komentarze ({comments.length})
        <ExpandVectorIcon />
      </StyledText>
      {commentSectionIsOpen ? (
        <Comments>
          {comments.map((comment) => (
            <Comment key={comment.id} userName={comment.userName} howLongAgo={comment.howLongAgo}>
              {comment.comment}
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
      userName: PropTypes.string.isRequired,
      howLongAgo: PropTypes.number.isRequired,
      children: PropTypes.string,
    })
  ),
  commentSectionIsOpen: PropTypes.bool.isRequired,
  setCommentSectionIsOpen: PropTypes.func.isRequired,
  handleAddComment: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
}

export default CommentSection
