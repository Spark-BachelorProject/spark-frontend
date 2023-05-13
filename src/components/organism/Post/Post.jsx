import React, { useState } from 'react'

import { ReactComponent as ClockIcon } from '@/assets/icons/clock.svg'
import { ReactComponent as ExpandVectorIcon } from '@/assets/icons/expand-vector.svg'
import { ReactComponent as GlobeIcon } from '@/assets/icons/globe.svg'
import { ReactComponent as PinIcon } from '@/assets/icons/map-pin.svg'
import { ReactComponent as SendVectorIcon } from '@/assets/icons/send-vector.svg'
import { Button } from '@/components/atoms/Button/Button.styles'
import Dot from '@/components/atoms/Dot/Dot'
import Tags from '@/components/atoms/Tags/Tags'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import AttendanceList from '@/components/molecules/AttendanceList/AttendanceList'
import Comment from '@/components/molecules/Comment/Comment'
import useModal from '@/hooks/useModal'

import { AttendingContent } from '../AttendingContent/AttendingContent'
import { MoreInfoPost } from '../MoreInfoPost/MoreInfoPost'
import {
  CommentSection,
  Details,
  Header,
  InteractionsSection,
  StyledMoreInfoIcon,
  StyledSearchInput,
  StyledText,
  Wrapper,
  DetailsWrapper,
} from './Post.styles'

const Post = () => {
  const numberOfComments = 3 // its taken from api
  const [commentSectionIsOpen, setCommentSectionIsOpen] = useState(!(numberOfComments > 2))

  const {
    Modal,
    isOpen,
    position,
    handleCloseModal,
    handleOpenAndPositionModal,
    modalOpenElementRef,
  } = useModal()
  const positioning = 'right'

  const {
    Modal: Modal2,
    isOpen: isOpen2,
    position: position2,
    handleCloseModal: handleCloseModal2,
    handleOpenAndPositionModal: handleOpenAndPositionModal2,
    modalOpenElementRef: modalOpenElementRef2,
  } = useModal()

  const handleOpenAttendanceList = () => {
    handleOpenAndPositionModal2(modalOpenElementRef2, positioning)
  }

  const handleCloseAttendanceList = (e) => {
    if (e.key !== 'Tab') {
      handleOpenAndPositionModal2(modalOpenElementRef2, positioning)
    }
  }

  const handleOpenMoreInfoPopup = () => {
    handleOpenAndPositionModal(modalOpenElementRef, positioning)
  }

  const handleCloseMoreInfoPopup = (e) => {
    if (e.key !== 'Tab') {
      handleOpenAndPositionModal(modalOpenElementRef, positioning)
    }
  }

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
        <div
          onClick={(e) => handleOpenMoreInfoPopup(e)}
          onKeyDown={handleCloseMoreInfoPopup}
          ref={modalOpenElementRef}
          tabIndex={0}
        >
          <StyledMoreInfoIcon />
        </div>
      </Header>
      <Title isBig isBold>
        Ktoś chętny na półtorej godziny grania na KULu? Mamy już przeciwnika
      </Title>
      <DetailsWrapper>
        <PinIcon />
        <Text>Hala Politechniki Lubelskiej - Kraśnicka 12</Text>
      </DetailsWrapper>
      <DetailsWrapper>
        <ClockIcon />
        <Text>Dzisiaj o 18:30</Text>
      </DetailsWrapper>
      <Tags>{['Gramy na luzie', 'Jeszcze 2 miejsca', 'Potem na harnasia']}</Tags>
      <InteractionsSection>
        <div
          onClick={(e) => handleOpenAttendanceList(e)}
          onKeyDown={handleCloseAttendanceList}
          ref={modalOpenElementRef2}
          tabIndex={0}
        >
          <AttendanceList numOfAttender={4} />
        </div>

        <Button borderOnly>
          {/* <UserCheckIcon /> */}
          Zgłoś obecność
        </Button>
      </InteractionsSection>
      <StyledSearchInput
        placeholder="Napisz komentarz..."
        isEmptyIcon
        Icon={<SendVectorIcon />}
        isAlwaysVisibleIcon
      />
      <StyledText
        onClick={() => setCommentSectionIsOpen((prev) => !prev)}
        commentSectionIsOpen={commentSectionIsOpen}
      >
        {commentSectionIsOpen ? 'Schowaj' : 'Pokaż'} komentarze ({numberOfComments})
        <ExpandVectorIcon />
      </StyledText>
      {commentSectionIsOpen ? (
        <CommentSection>
          <Comment userName={'Kasia Baran'} howLongAgo={18}>
            Będę, postaram się nie spóżnić
          </Comment>
          <Comment userName={'Mariusz Siembida'} howLongAgo={13}>
            Dzisiaj odpadam, ale następnym razem będę ;)
          </Comment>
        </CommentSection>
      ) : null}

      {isOpen ? (
        <Modal handleClose={handleCloseModal} position={position}>
          <MoreInfoPost />
        </Modal>
      ) : null}

      {isOpen2 ? (
        <Modal2 handleClose={handleCloseModal2} position={position2} isModal hasBackgroundColor>
          <AttendingContent />
        </Modal2>
      ) : null}
    </Wrapper>
  )
}

export default Post
