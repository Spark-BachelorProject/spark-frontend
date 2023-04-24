import styled from 'styled-components'

import { ReactComponent as CanceledIcon } from '@/assets/icons/cancel-circle.svg'
import { ReactComponent as CommentIcon } from '@/assets/icons/comment-circle.svg'
import { ReactComponent as AttendIcon } from '@/assets/icons/check-circle.svg'
import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 20px 15px 5px;
  border-radius: 7px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bookmarkBg};
    transition: background-color 200ms ease-in;
  }
`

export const StyledCanceledIcon = styled(CanceledIcon)`
  position: absolute;
  top: 60%;
  left: 45%;
`

export const StyledCommentIcon = styled(CommentIcon)`
  position: absolute;
  top: 60%;
  left: 45%;
`

export const StyledAttendingIcon = styled(AttendIcon)`
  position: absolute;
  top: 60%;
  left: 45%;
`

export const ThumbnailIconWrapper = styled.div`
  position: relative;
`

export const StyledText = styled(Text)`
  width: 100%;
`
export const StyledSmallText = styled(Text)`
  font-size: ${({ isBig, theme }) => (isBig ? theme.fontSize.m : theme.fontSize.s)};
  color: ${({ theme }) => theme.colors.placeholder};
`
