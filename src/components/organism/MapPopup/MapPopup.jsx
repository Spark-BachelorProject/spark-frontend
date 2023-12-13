import { useNavigate } from 'react-router'

import Avvvatars from 'avvvatars-react'

import { ReactComponent as ClockIcon } from '@/assets/icons/clock.svg'
import { ReactComponent as GlobeIcon } from '@/assets/icons/globe.svg'
import { ReactComponent as PinIcon } from '@/assets/icons/map-pin.svg'
import { Button } from '@/components/atoms/Buttons/Button.styles'
import { CloseButton } from '@/components/atoms/CloseButton/CloseButton'
import Dot from '@/components/atoms/Dot/Dot'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Details } from '@/components/organism/Post/Post.styles'
import { formatDate, formatTimeAgo, formatTimeHHMM } from '@/helpers/dateAndTime'

import {
  ButtonWrapper,
  StyledHeader,
  StyledTags,
  StyledText,
  Time,
  Wrapper,
} from './MapPopup.styles'

export const MapPopup = ({
  onCloseClick,
  selectedMarker: { id, creator, dateCreated, location, activity, dateStart, description, tags },
}) => {
  const navigate = useNavigate()

  const handleOpenSinglePageClick = () => {
    navigate(`/posts/${id}`)
  }

  return (
    <Wrapper>
      <StyledHeader>
        <Avvvatars value={`${creator.firstName} ${creator.lastName}`} size={35} />

        <Details>
          <div>
            <b>{`${creator.firstName} ${creator.lastName}`} </b>
            <Text>napisał(a) {formatTimeAgo(dateCreated)}</Text>
          </div>
          <div>
            <Text>{activity.name}</Text>
            <Dot />
            <GlobeIcon />
          </div>
        </Details>
      </StyledHeader>
      <Time>
        <ClockIcon />
        <Text>
          {formatDate(dateStart)} o {formatTimeHHMM(dateStart)}
        </Text>
      </Time>
      <Time>
        <PinIcon />
        <Text>{location.name}</Text>
      </Time>
      <StyledText isBold isBig>
        {description}
      </StyledText>
      <StyledTags>{tags}</StyledTags>

      <ButtonWrapper>
        <Button onClick={handleOpenSinglePageClick}>Zobacz post</Button>
      </ButtonWrapper>
      <CloseButton onClick={onCloseClick} />
    </Wrapper>
  )
}
