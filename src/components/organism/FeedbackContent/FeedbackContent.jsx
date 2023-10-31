import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import { ReactComponent as XIcon } from '@/assets/icons/x.svg'
import { Button } from '@/components/atoms/Button/Button.styles'
import { Error } from '@/components/atoms/Error/Error.styles'
import { TextArea } from '@/components/atoms/TextArea/TextArea.styles'

import { StyledTitle, Wrapper, HeaderWrapper } from './FeedbackContent.styles'

const errorMessage = 'Ocena i/lub opinia nie została wystawiona'

export const FeedbackContent = ({ handleClose, handleFeedbackSubmitted }) => {
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [error, setError] = useState('')

  const handleFeedback = (e) => {
    setFeedback(e.target.value)
  }

  const handleRating = (rate) => {
    setRating(rate)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (rating < 0.5 || feedback === '') {
      setError(errorMessage)
      return
    }
    handleFeedbackSubmitted()
    console.log(rating, feedback)
    handleClose()
  }

  return (
    <Wrapper>
      <HeaderWrapper>
        <StyledTitle>Feedback</StyledTitle>
        <XIcon onClick={handleClose} />
      </HeaderWrapper>
      <Rating onClick={handleRating} allowFraction={true} />
      <TextArea placeholder="Napisz opinie" onChange={handleFeedback} />
      {error && <Error>{error}</Error>}
      <Button onClick={handleSubmit}>Wyślij</Button>
    </Wrapper>
  )
}
