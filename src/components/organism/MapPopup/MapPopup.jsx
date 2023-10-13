import { ReactComponent as ClockIcon } from '@/assets/icons/clock.svg'
import { ReactComponent as GlobeIcon } from '@/assets/icons/globe.svg'
import { Button } from '@/components/atoms/Button/Button.styles'
import Dot from '@/components/atoms/Dot/Dot'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'
import { Details } from '@/components/organism/Post/Post.styles'

import { CloseButton, StyledHeader, StyledTags, Time, Wrapper } from './MapPopup.styles'

export const MapPopup = ({
  onCloseClick,
  author,
  createdAt,
  activity,
  date,
  time,
  tags,
  title,
}) => {
  return (
    <Wrapper>
      <StyledHeader>
        <Thumbnail isBig />
        <Details>
          <div>
            <b>{author} </b>
            <Text>napisał(a) {createdAt} min temu</Text>
          </div>
          <div>
            <Text>{activity}</Text>
            <Dot />
            <GlobeIcon />
          </div>
        </Details>
      </StyledHeader>
      <Time>
        <ClockIcon />
        <Text>
          {date} o {time}
        </Text>
      </Time>
      <Text>{title}</Text>
      <StyledTags>{tags}</StyledTags>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-50px' }}>
        <Button>Zobacz post</Button>
      </div>
      <CloseButton onClick={onCloseClick}>×</CloseButton>
    </Wrapper>
  )
}
