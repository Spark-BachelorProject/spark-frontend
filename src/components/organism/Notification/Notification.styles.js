import styled from 'styled-components'

import { Text } from '@/components/atoms/Text/Text.styles'
import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 15px 20px 15px 5px;

  border-radius: 7px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bookmarkBg};
    transition: background-color 200ms ease-in;
  }

  &::before {
    display: ${({ isRead }) => (isRead ? 'none' : 'inline')};
    position: absolute;
    content: '';
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 9px;
    height: 9px;
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 50%;
  }
`

export const TextWrapper = styled.div`
  max-width: 70%;
`

export const StyledThumbnail = styled(Thumbnail)`
  height: 44px;
  width: 44px;
`

export const ThumbnailIconWrapper = styled.div`
  position: relative;

  & > svg {
    position: absolute;
    bottom: 0;
    right: 15%;
  }
`

export const StyledText = styled(Text)`
  width: 100%;
`
export const StyledSmallText = styled(Text)`
  font-size: ${({ isBig, theme }) => (isBig ? theme.fontSize.m : theme.fontSize.s)};
  color: ${({ theme }) => theme.colors.placeholder};
`
