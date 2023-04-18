import styled from 'styled-components'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'

export const Wrapper = styled.div`
  padding: 15px 5px;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 5px 0 0 0;
  border-radius: 7px;
  gap: 2px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bookmarkBg};
    transition: background-color 200ms ease-in;
  }
`

export const NameActivityWrapper = styled.div`
  margin: ${({ isCancelled }) => (isCancelled ? `-4px 0 0 0` : '0')};
  display: flex;
  justify-content: start;
  align-content: center;
  gap: 8px;
  width: 100%;
`

export const StyledThumbnail = styled(Thumbnail)`
  height: 44px;
  width: 44px;
`

export const FirstRowText = styled(Text)`
  font-size: ${({ theme, isCancelled }) => (isCancelled ? theme.fontSize.s : theme.fontSize.m)};
  color: ${({ theme, isCancelled }) =>
    isCancelled ? theme.colors.checkboxTick : theme.colors.textHeader};
  /* color: ${({ theme }) => theme.colors.textHeader}; */
  font-weight: 500;
`

export const SecondRowText = styled(Text)`
  margin: ${({ isCancelled }) => (isCancelled ? '-3px 0 0 0' : '0')};
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme, isCancelled }) =>
    isCancelled ? theme.colors.checkboxTick : theme.colors.textHeader};
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
