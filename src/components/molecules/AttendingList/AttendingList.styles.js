import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'
import { consecutiveNumbers } from '@/helpers/consecutiveNumbers'
import styled from 'styled-components'

// TODO: let Thumbnail be more elastic
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  ${Thumbnail} {
    border: 3px solid ${({ theme }) => theme.colors.secondaryBg};
    width: 32px;
    height: 32px;
  }

  ${consecutiveNumbers(6).map(
    (num, i) => `${Thumbnail}:nth-child(${num}){
      z-index: ${6 - i};
      transform: translateX(${i * -21}px)
    }`
  )}
`

export const AttendingCounter = styled.span`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.attendingCounterBg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({ numOfAttender }) => `${-numOfAttender * 20 + 10}px`};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: ${({ theme }) => theme.fontSize.sPlus};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.boldText};
`
