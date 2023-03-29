import React, { useState } from 'react'
import { ReactComponent as UserCheckIcon } from '@/assets/icons/user-check.svg'
import { ReactComponent as SendVectorIcon } from '@/assets/icons/send-vector.svg'
import { ReactComponent as ExpandVectorIcon } from '@/assets/icons/expand-vector.svg'
import { Title } from '@/components/atoms/Title/Title.styles'
import { Button } from '@/components/atoms/Button/Button.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import {
  CommentSection,
  Details,
  Friends,
  Header,
  InteractionsSection,
  StyledMoreInfoIcon,
  StyledSearchInput,
  Tags,
  ThumbnailImage,
  Wrapper,
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
            <span className="dot">•</span>
            <Text>Kraśnicka 12</Text>
            <span className="dot">•</span>
            <Text>Dzisiaj o 18:30</Text>
          </div>
        </Details>
        <StyledMoreInfoIcon />
      </Header>
      <Title>Ktoś chętny na półtorej godziny grania na KULu? Mamy już przeciwnika</Title>
      <Tags>
        <Button>Gramy na luzie</Button>
        <Button>Jeszcze 2 miejsca</Button>
        <Button>Potem na harnasia</Button>
      </Tags>
      <InteractionsSection>
        <Friends>
          <ThumbnailImage />
          <ThumbnailImage />
          <ThumbnailImage />
        </Friends>
        <Button>
          <UserCheckIcon />
          Będę
        </Button>
      </InteractionsSection>
      <StyledSearchInput
        styles={{ marginTop: '50px' }}
        placeholder="Napisz komentarz..."
        isEmptyIcon
        Icon={<SendVectorIcon />}
      />
      {commentSectionIsOpen ? (
        <CommentSection>
          <Text>Comment1</Text>
          <Text>Comment2</Text>
          <Text>Comment3</Text>
        </CommentSection>
      ) : (
        <Text>
          Pokaż komentarze (3) <ExpandVectorIcon />
        </Text>
      )}
    </Wrapper>
  )
}

export default Post
