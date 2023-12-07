import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
`

export const StyledAvatar = styled.div`
  z-index: ${({ index, numOfParticipants }) => numOfParticipants - index};
  transform: translateX(${({ index }) => index * -15}px);
  border: 3px solid ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 50%;
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

  :hover {
    background-color: ${({ theme }) => theme.colors.navbarBorder};
  }
`
