import { useState } from 'react'

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
import { formatDate, formatTime, formatTimeAgo } from '@/helpers/dateAndTime'
import useModal from '@/hooks/useModal'

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

// its taken from api
const defaultComments = [
  {
    id: 1,
    userName: 'Kasia Baran',
    howLongAgo: 18,
    comment: 'Będę, postaram się nie spóżnić',
  },
  {
    id: 2,
    userName: 'Mariusz Siembida',
    howLongAgo: 13,
    comment: 'Dzisiaj odpadam, ale następnym razem będę ;)',
  },
]

const Post = (props) => {
  const {
    activity,
    comments: apiComments,
    creator,
    dateCreated,
    dateEnd,
    dateStart,
    description,
    location,
    privacySettings,
    tags,
  } = props
  console.log(props)
  const [comments, setComments] = useState(apiComments)
  const [inputValue, setInputValue] = useState('')

  const handleAddComment = (e) => {
    e.preventDefault()
    if (inputValue === '') return
    //FIXME: fix howLongAgo
    //FIXME: fix id
    setComments((prev) => [
      ...prev,
      {
        id: Math.random() * 1000 + 100,
        userName: creator.firstName,
        howLongAgo: 0,
        comment: inputValue,
      },
    ])
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
          {formatDate(dateStart)} o {formatTime(dateStart)}
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

      <CommentSection
        handleAddComment={handleAddComment}
        inputValue={inputValue}
        setInputValue={setInputValue}
        comments={comments}
      />

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
