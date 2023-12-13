import { useState } from 'react'

import Avvvatars from 'avvvatars-react'

import { ReactComponent as ClockIcon } from '@/assets/icons/clock.svg'
import { ReactComponent as GlobeIcon } from '@/assets/icons/globe.svg'
import { ReactComponent as PinIcon } from '@/assets/icons/map-pin.svg'
import { SecondaryButton } from '@/components/atoms/Buttons/SecondaryButton.styles'
import Dot from '@/components/atoms/Dot/Dot'
import Tags from '@/components/atoms/Tags/Tags'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import AttendanceList from '@/components/molecules/AttendanceList/AttendanceList'
import { ModalMap } from '@/components/molecules/ModalMap/ModalMap'
import { formatDate, formatTimeAgo, formatTimeHHMM } from '@/helpers/dateAndTime'
import { getInitials } from '@/helpers/stringOperations'
import useModal from '@/hooks/useModal'
import usePopup from '@/hooks/usePopup'
import { useAddCommentMutation, useGetCommentsQuery } from '@/store/api/comments'
import { useDeleteParticipationMutation, usePutParticipateMutation } from '@/store/api/posts'
import { useGetUserQuery } from '@/store/api/user'

import { AttendingContent } from '../AttendingContent/AttendingContent'
import CommentSection from '../CommentSection/CommentSection'
import { MoreInfoPost } from '../MoreInfoPost/MoreInfoPost'
import {
  ButtonsWrapper,
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
    creator: { firstName, lastName },
    dateCreated,
    // dateEnd,
    dateStart,
    description,
    location,
    // privacySettings,
    tags,
    id: postId,
    participants,
  } = props
  const [putParticipate] = usePutParticipateMutation()
  const [deleteParticipation] = useDeleteParticipationMutation()
  const [inputValue, setInputValue] = useState('')
  const [addComment] = useAddCommentMutation()
  const { data: comments, isLoading: isLoadingComments } = useGetCommentsQuery(postId)
  const { data: user } = useGetUserQuery()

  const handleAddComment = (e) => {
    e.preventDefault()
    if (inputValue === '') return

    const newComment = {
      postId,
      userId: user.id,
      comment: inputValue,
    }

    addComment(newComment)

    setInputValue('')
  }

  const {
    Popup,
    isOpen,
    position,
    handleClosePopup,
    handleOpenAndPositionPopup,
    popupOpenElementRef,
  } = usePopup()
  const popupPositioning = 'right'

  const {
    Modal: Modal2,
    isOpen: isOpen2,
    position: position2,
    handleCloseModal: handleCloseModal2,
    handleOpenAndPositionModal: handleOpenAndPositionModal2,
    modalOpenElementRef: modalOpenElementRef2,
  } = useModal()
  const positioning = 'center'

  const {
    Modal: Modal3,
    isOpen: isOpen3,
    position: position3,
    handleCloseModal: handleCloseModal3,
    handleOpenAndPositionModal: handleOpenAndPositionModal3,
    modalOpenElementRef: modalOpenElementRef3,
  } = useModal()

  const handleOpenMoreInfoPopup = () => {
    handleOpenAndPositionPopup(popupOpenElementRef, popupPositioning)
  }

  const handleCloseMoreInfoPopup = (e) => {
    if (e.key !== 'Tab') {
      handleOpenAndPositionPopup(popupOpenElementRef, popupPositioning)
    }
  }

  const handleOpenAttendanceList = () => {
    handleOpenAndPositionModal2(modalOpenElementRef2, positioning)
  }

  const handleCloseAttendanceList = (e) => {
    if (e.key !== 'Tab') {
      handleOpenAndPositionModal2(modalOpenElementRef2, positioning)
    }
  }

  const handleOpenMapModal = () => {
    handleOpenAndPositionModal3(modalOpenElementRef3, positioning)
  }

  const handleParticipation = async () => {
    try {
      ifUserIsParticipant() ? await deleteParticipation(postId) : await putParticipate(postId)
    } catch (error) {
      console.error('Error taking part in post:', error)
    }
  }

  const ifUserIsParticipant = () => participants.some((participant) => participant.id === user.id)

  return (
    <Wrapper>
      <Header>
        <Avvvatars value={getInitials(firstName, lastName)} />
        <Details>
          <div>
            <b>
              {firstName} {lastName}
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
          ref={popupOpenElementRef}
          tabIndex={0}
        >
          <StyledMoreInfoIcon />
        </div>
      </Header>
      <Title isBig>{description}</Title>
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
          <AttendanceList participants={participants} />
        </div>
        <ButtonsWrapper>
          <SecondaryButton
            onClick={(e) => handleOpenMapModal(e)}
            ref={modalOpenElementRef3}
            tabIndex={0}
          >
            Pokaż na mapie
          </SecondaryButton>
          <SecondaryButton isFilled={ifUserIsParticipant()} isGray onClick={handleParticipation}>
            {ifUserIsParticipant() ? 'Odwołaj obecność' : 'Zgłoś obecność'}
          </SecondaryButton>
        </ButtonsWrapper>
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
        <Popup handleClose={handleClosePopup} position={position}>
          <MoreInfoPost
            postId={postId}
            handleClosePopup={handleClosePopup}
            location={location}
            dateStart={dateStart}
          />
        </Popup>
      ) : null}

      {isOpen3 ? (
        <Modal3
          position={position3}
          isModal
          hasBackgroundColor
          isFixed
          hasNoPadding
          handleClose={handleCloseModal3}
        >
          <ModalMap location={location} handleClose={handleCloseModal3} />
        </Modal3>
      ) : null}

      {isOpen2 ? (
        <Modal2
          handleClose={handleCloseModal2}
          position={position2}
          isModal
          hasBackgroundColor
          isFixed
        >
          <AttendingContent participants={participants} />
        </Modal2>
      ) : null}
    </Wrapper>
  )
}

export default Post
