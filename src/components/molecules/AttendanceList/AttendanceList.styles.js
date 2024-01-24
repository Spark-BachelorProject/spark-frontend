import styled from 'styled-components'

import { Title } from '@/components/atoms/Title/Title.styles'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
`

export const StyledAvatar = styled.div`
  z-index: ${({ index }) => index + 1};
  transform: translateX(${({ index }) => index * -15}px);
  border: 3px solid ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 50%;
`

export const StyledTitle = styled(Title)`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.s} !important;
  color: ${({ theme }) => theme.colors.titleFont} !important;
`

export const AttendingCounter = styled.span`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.attendingCounterBg};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  margin-left: ${({ maxNumOfParticipants }) => `${-maxNumOfParticipants * 15}px`};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: ${({ theme }) => theme.fontSize.sPlus};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.boldText};

  &:hover {
    background-color: ${({ theme }) => theme.colors.navbarBorder};
  }
`
