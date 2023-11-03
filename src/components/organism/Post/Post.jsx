import { useEffect, useState, memo } from 'react'

import { ReactComponent as ClockIcon } from '@/assets/icons/clock.svg'
import { ReactComponent as GlobeIcon } from '@/assets/icons/globe.svg'
import { ReactComponent as PinIcon } from '@/assets/icons/map-pin.svg'
import { Button } from '@/components/atoms/Button/Button.styles'
import Dot from '@/components/atoms/Dot/Dot'
import Tags from '@/components/atoms/Tags/Tags'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import AttendanceList from '@/components/molecules/AttendanceList/AttendanceList'
import { formatDate, formatTimeHHMM, formatTimeAgo } from '@/helpers/dateAndTime'
import useModal from '@/hooks/useModal'
import { useAddCommentMutation, useGetCommentsQuery } from '@/store/api/comments'
import { useGetUserQuery } from '@/store/api/user'

import { AttendingContent } from '../AttendingContent/AttendingContent'
import CommentSection from '../CommentSection/CommentSection'
import { MoreInfoPost } from '../MoreInfoPost/MoreInfoPost'
import {
  Details,
  DetailsWrapper,
  Header,
  InteractionsSection,
  StyledMoreInfoIcon,
  Wrapper,
} from './Post.styles'

const Post = (props) => {
  const {
    activity,
    creator,
    dateCreated,
    dateEnd,
    dateStart,
    description,
    location,
    privacySettings,
    tags,
    id: postId,
  } = props
  const [inputValue, setInputValue] = useState('')
  const [addComment] = useAddCommentMutation()
  const { data: comments, isLoading: isLoadingComments } = useGetCommentsQuery(postId)
  const { data: user } = useGetUserQuery()

  const handleAddComment = (e) => {
    e.preventDefault()
    if (inputValue === '') return
    console.log('addCOOMENT', postId)

    const newComment = {
      postId,
      userId: user.id,
      comment: inputValue,
    }

    addComment(newComment)

    setInputValue('')
  }

  const {
    Modal,
    isOpen,
    position,
    handleCloseModal,
    handleOpenAndPositionModal,
    modalOpenElementRef,
  } = useModal()
  const positioning = 'center'

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
            <b>
              {creator.firstName} {creator.lastName}
            </b>
            <Text>napisał(a) {formatTimeAgo(dateCreated)}</Text>
          </div>
          <div>
            <Text>{activity.name}</Text>
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
        {description}
      </Title>
      <DetailsWrapper>
        <PinIcon />
        <Text>{location.name}</Text>
      </DetailsWrapper>
      <DetailsWrapper>
        <ClockIcon />
        <Text>
          {formatDate(dateStart)} o {formatTimeHHMM(dateStart)}
        </Text>
      </DetailsWrapper>
      <Tags>{tags}</Tags>
      <InteractionsSection>
        <div
          onClick={(e) => handleOpenAttendanceList(e)}
          onKeyDown={handleCloseAttendanceList}
          ref={modalOpenElementRef2}
          tabIndex={0}
        >
          <AttendanceList numOfAttender={4} />
        </div>

        <Button borderOnly>Zgłoś obecność</Button>
      </InteractionsSection>

      {!isLoadingComments && (
        <CommentSection
          handleAddComment={handleAddComment}
          inputValue={inputValue}
          setInputValue={setInputValue}
          comments={comments}
        />
      )}

      {isOpen ? (
        <Modal handleClose={handleCloseModal} position={position}>
          <MoreInfoPost />
        </Modal>
      ) : null}

      {isOpen2 ? (
        <Modal2
          handleClose={handleCloseModal2}
          position={position2}
          isModal
          hasBackgroundColor
          isFixed
        >
          <AttendingContent />
        </Modal2>
      ) : null}
    </Wrapper>
  )
}

export default Post
