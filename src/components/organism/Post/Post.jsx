import React, { useState } from 'react'
import { ReactComponent as UserCheckIcon } from '@/assets/icons/user-check.svg'
import { ReactComponent as SendVectorIcon } from '@/assets/icons/send-vector.svg'
import { ReactComponent as ExpandVectorIcon } from '@/assets/icons/expand-vector.svg'
import { ReactComponent as PinIcon } from '@/assets/icons/map-pin.svg'
import { ReactComponent as ClockIcon } from '@/assets/icons/clock.svg'
import { ReactComponent as GlobeIcon } from '@/assets/icons/globe.svg'

import { Title } from '@/components/atoms/Title/Title.styles'
import { Button } from '@/components/atoms/Button/Button.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import {
  CommentSection,
  Details,
  Header,
  InteractionsSection,
  StyledMoreInfoIcon,
  StyledSearchInput,
  StyledText,
  Tags,
  Wrapper,
  DetailsWrapper,
} from './Post.styles'
import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'
import Dot from '@/components/atoms/Dot/Dot'
import AttendingList from '@/components/molecules/AttendingList/AttendingList'

// TODO: expand comments

const Post = () => {
  const [commentSectionIsOpen, setCommentSectionIsOpen] = useState(false)
  return (
    <Wrapper>
      <Header>
        <Thumbnail isBig />
        <Details>
          <div>
            <b>Kasia Baran</b>
            <Text>napisała 18 min temu</Text>
          </div>
          <div>
            <Text>Siatkówka</Text>
            <Dot />
            <GlobeIcon />
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
      <Title isBold>Ktoś chętny na półtorej godziny grania na KULu? Mamy już przeciwnika</Title>
      <Tags>
        <Button>Gramy na luzie</Button>
        <Button>Jeszcze 2 miejsca</Button>
        <Button>Potem na harnasia</Button>
      </Tags>
      <InteractionsSection>
        <AttendingList numOfAttender={4} />
        <Button>
          <UserCheckIcon />
          Będę
        </Button>
      </InteractionsSection>
      <StyledSearchInput
        placeholder="Napisz komentarz..."
        isEmptyIcon
        Icon={<SendVectorIcon />}
        isAlwaysVisibleIcon
      />
      <StyledText onClick={() => setCommentSectionIsOpen((prev) => !prev)}>
        Pokaż komentarze (3) <ExpandVectorIcon />
      </StyledText>
      {commentSectionIsOpen ? (
        <CommentSection>
          <Text>Comment1</Text>
          <Text>Comment2</Text>
          <Text>Comment3</Text>
        </CommentSection>
      ) : null}
    </Wrapper>
  )
}

export default Post
