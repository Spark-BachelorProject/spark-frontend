import styled from 'styled-components'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'
import { ReactComponent as CanceledIcon } from '@/assets/icons/cancel-circle.svg'

export const Wrapper = styled.div`
  position: relative;
  padding: 15px 5px;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 5px 0 0 0;
  border-radius: 7px;
  gap: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bookmarkBg};
    transition: background-color 200ms ease-in;
  }
`

export const StyledCanceledIcon = styled(CanceledIcon)`
  position: absolute;
  top: 60%;
  left: 10%;
  z-index: 100;
`

export const NameActivityWrapper = styled.div`
  margin: ${({ isCancelled }) => (isCancelled ? `-4px 0 0 0` : '0')};
  display: flex;
  justify-content: start;
  align-content: center;
  gap: 5px;
  width: 100%;
`

export const StyledThumbnail = styled(Thumbnail)`
  height: 44px;
  width: 44px;
`

export const FirstRowText = styled(Text)`
  font-size: ${({ theme, isCancelled }) => (isCancelled ? theme.fontSize.m : theme.fontSize.m)};
  color: ${({ theme }) => theme.colors.textHeader};
  font-weight: 400;
`

export const SecondRowText = styled(Text)`
  /* margin: ${({ isCancelled }) => (isCancelled ? '-3px 0 0 0' : '5px 0')}; */
  margin-top: 3px;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.textHeader};
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CancelledText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.redFont};
  font-weight: 500;
  opacity: 0.9;
`
