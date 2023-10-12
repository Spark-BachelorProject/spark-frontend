import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import styled from 'styled-components'

import { Button } from '@/components/atoms/Button/Button.styles'
import { Input } from '@/components/atoms/Input/Input.styles'
import { TextArea } from '@/components/atoms/TextArea/TextArea.styles'

import { StyledTitle } from '../DekstopRightBar/DekstopRightBar.styles'

export const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
export const StyledInput = styled(Input)`
  padding: 10px 10px;
  line-height: 28px;
`

export const FeedbackContent = ({ handleClose, setFeedbackSubmitted }) => {
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState('')

  const handleFeedback = (e) => {
    setFeedback(e.target.value)
  }

  const handleRating = (rate) => {
    setRating(rate)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFeedbackSubmitted(true)
    console.log(rating, feedback)
    handleClose()
  }

  return (
    <Wrapper>
      <StyledTitle>Feedback</StyledTitle>
      <Rating onClick={handleRating} allowFraction={true} />
      <TextArea placeholder="Napisz opinie" onKeyDown={handleFeedback} />
      <Button onClick={handleSubmit}>Wyślij</Button>
    </Wrapper>
  )
}
