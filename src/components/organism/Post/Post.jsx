import React, { useState } from 'react'
import { ReactComponent as UserCheckIcon } from '@/assets/icons/user-check.svg'
import { ReactComponent as SendVectorIcon } from '@/assets/icons/send-vector.svg'
import { ReactComponent as ExpandVectorIcon } from '@/assets/icons/expand-vector.svg'
import { ReactComponent as PinIcon } from '@/assets/icons/map-pin.svg'
import { ReactComponent as ClockIcon } from '@/assets/icons/clock.svg'

import { Title } from '@/components/atoms/Title/Title.styles'
import { Button } from '@/components/atoms/Button/Button.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import {
  AttendingCounter,
  CommentSection,
  Details,
  AttendingList,
  Header,
  InteractionsSection,
  StyledMoreInfoIcon,
  StyledSearchInput,
  StyledText,
  Tags,
  ThumbnailImage,
  Wrapper,
  DetailsWrapper,
} from './Post.styles'

// TODO: expand comments, friend thumb nail

const Post = () => {
  const [commentSectionIsOpen, setCommentSectionIsOpen] = useState(false)
  return (
    <Wrapper>
      <Header>
        <ThumbnailImage isBig />
        <Details>
          <div>
            <b>Kasia Baran</b>
            <Text>napisała 18 minut temu</Text>
          </div>
          <div>
            <Text>Siatkówka</Text>
            {/* <span className="dot">•</span> */}
          </div>
        </Details>
        <StyledMoreInfoIcon />
      </Header>
      <DetailsWrapper>
        <PinIcon />
        <Text>Hala Politechniki Lubelskiej, Kraśnicka 12</Text>
      </DetailsWrapper>
      <DetailsWrapper>
        <ClockIcon />
        <Text>Dzisiaj o 18:30</Text>
      </DetailsWrapper>
      <Title>Ktoś chętny na półtorej godziny grania na KULu? Mamy już przeciwnika</Title>
      <Tags>
        <Button>Gramy na luzie</Button>
        <Button>Jeszcze 2 miejsca</Button>
        <Button>Potem na harnasia</Button>
      </Tags>
      <InteractionsSection>
        <AttendingList>
          <ThumbnailImage />
          <ThumbnailImage />
          <ThumbnailImage />
          <ThumbnailImage />
          <ThumbnailImage />
          <ThumbnailImage />
          <AttendingCounter>
            <span>+</span>3
          </AttendingCounter>
        </AttendingList>
        <Button>
          <UserCheckIcon />
          Będę
        </Button>
      </InteractionsSection>
      <StyledSearchInput placeholder="Napisz komentarz..." isEmptyIcon Icon={<SendVectorIcon />} />
      {commentSectionIsOpen ? (
        <CommentSection>
          <Text>Comment1</Text>
          <Text>Comment2</Text>
          <Text>Comment3</Text>
        </CommentSection>
      ) : (
        <StyledText>
          Pokaż komentarze (3) <ExpandVectorIcon />
        </StyledText>
      )}
    </Wrapper>
  )
}

export default Post
