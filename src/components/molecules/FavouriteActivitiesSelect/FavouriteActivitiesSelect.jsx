import { useEffect, useState } from 'react'

import { Button } from '@/components/atoms/Buttons/Button.styles'
import { SecondaryButton } from '@/components/atoms/Buttons/SecondaryButton.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import { useGetActivitiesQuery } from '@/store/api/activities'

import {
  ActivitiesWrapper,
  StyledBlueText,
  StyledButton,
  StyledText,
  Wrapper,
} from './FavouriteActivitiesSelect.styles'

export const FavouriteActivitiesSelect = ({ handleClose }) => {
  const [activities, setActivities] = useState([])
  const [showAll, setShowAll] = useState(false)

  const { data: activitiesApi, isLoading: isLoadingActivitiesApi } = useGetActivitiesQuery()

  const [selectedActivities, setSelectedActivities] = useState([])

  useEffect(() => {
    if (!isLoadingActivitiesApi) {
      if (activitiesApi.length === 0) return
      const activitiesApiWithValue = activitiesApi.map((activity) => ({
        ...activity,
        value: activity.name,
      }))
      setActivities(activitiesApiWithValue)
    }
  }, [activitiesApi, isLoadingActivitiesApi])

  const handleActivityClick = (activity) => {
    if (selectedActivities.includes(activity)) {
      setSelectedActivities(selectedActivities.filter((a) => a !== activity))
    } else {
      setSelectedActivities([...selectedActivities, activity])
    }
  }

  console.log(selectedActivities)

  const displayedActivities = showAll ? activities : activities.slice(0, 15)

  return (
    <Wrapper>
      <Title isBig isBold>
        Wybierz swoje ulubione aktywności
      </Title>
      <StyledText isBig>Zaznacz dowolną ilość aktywności</StyledText>
      <ActivitiesWrapper>
        {displayedActivities.map((activity, index) => (
          <Button
            key={index}
            isGray={!selectedActivities.includes(activity)}
            onClick={() => handleActivityClick(activity)}
          >
            {activity.name}
          </Button>
        ))}
      </ActivitiesWrapper>
      <StyledBlueText onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Pokaż mniej' : 'Pokaż więcej'}
      </StyledBlueText>
      <StyledButton isGray onClick={handleClose}>
        Anuluj
      </StyledButton>
      <SecondaryButton disabled={selectedActivities.length === 0}>Potwierdź</SecondaryButton>
    </Wrapper>
  )
}
