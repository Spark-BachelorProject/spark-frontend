import { useState } from 'react'

import { Button } from '@/components/atoms/Buttons/Button.styles'
import { Error } from '@/components/atoms/Error/Error.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import { TextArea } from '@/components/atoms/TextArea/TextArea.styles'
import { RatingBox } from '@/components/molecules/RatingBox/RatingBox'
import { usePostFeedbackMutation } from '@/store/api/feedback'

import {
  ButtonWrapper,
  HeaderWrapper,
  RatingWrapper,
  StyledCloseIcon,
  StyledTitle,
  Wrapper,
} from './FeedbackContent.styles'

const errorMessage = 'Podaj ocenę lub opis'

export const FeedbackContent = ({ handleClose, handleFeedbackSubmitted }) => {
  const [rating, setRating] = useState(null)
  const [feedback, setFeedback] = useState('')
  const [error, setError] = useState('')
  const [sendFeedback] = usePostFeedbackMutation()

  const handleFeedback = (e) => {
    setFeedback(e.target.value)
  }

  const handleRating = (rating) => {
    setRating(rating)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (feedback === '' && rating === null) {
      setError(errorMessage)
      return
    }

    const newFeedback = {
      message: feedback,
      rating: rating,
    }

    sendFeedback(newFeedback)
    handleFeedbackSubmitted()
    handleClose()
    console.log(newFeedback)
  }

  return (
    <Wrapper>
      <HeaderWrapper>
        <StyledTitle>Jak oceniasz naszą aplikację?</StyledTitle>
        <Text>Opisz swoje doświadczenia, co Ci się podoba, i co możemy poprawić</Text>
      </HeaderWrapper>
      <StyledCloseIcon onClick={handleClose} />

      <RatingWrapper>
        <RatingBox
          icon="worst"
          rating="Tragicznie"
          onClick={() => handleRating(1)}
          isSelected={rating === 1}
        />
        <RatingBox
          icon="bad"
          rating="Słabo"
          onClick={() => handleRating(2)}
          isSelected={rating === 2}
        />
        <RatingBox
          icon="average"
          rating="Średnio"
          onClick={() => handleRating(3)}
          isSelected={rating === 3}
        />
        <RatingBox
          icon="good"
          rating="Dobrze"
          onClick={() => handleRating(4)}
          isSelected={rating === 4}
        />
        <RatingBox
          icon="best"
          rating="Super"
          onClick={() => handleRating(5)}
          isSelected={rating === 5}
        />
      </RatingWrapper>

      <TextArea placeholder="Opisz dokładniej powód oceny" onChange={handleFeedback} />
      {error && <Error>{error}</Error>}
      <ButtonWrapper>
        <Button onClick={handleSubmit}>Wyślij</Button>
        <Button onClick={handleClose} isGray>
          Anuluj
        </Button>
      </ButtonWrapper>
    </Wrapper>
  )
}
