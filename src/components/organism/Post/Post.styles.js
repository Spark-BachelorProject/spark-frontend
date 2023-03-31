import styled from 'styled-components'

import { ReactComponent as MoreInfoIcon } from '@/assets/icons/three-dots.svg'
import { Button } from '@/components/atoms/Button/Button.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import SearchInput from '@/components/molecules/SearchInput/SearchInput'
import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  margin: 10px auto;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.colors.postBorder};
  border-radius: 6px;

  ${Title} {
    line-height: 1.3;
    margin-top: 20px;
  }
`
export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 70% 1.7fr;
  align-items: center;
`
export const ThumbnailImage = styled.img`
  width: ${({ isBig }) => (isBig ? '34px' : '27px')};
  height: ${({ isBig }) => (isBig ? '34px' : '27px')};
  border-radius: 60%;
  margin-right: auto;
  background-color: ${({ theme }) => theme.colors.buttonBorder};
  box-shadow: inset 0px 0px 3px #d2e2fd;
`

export const StyledThumbnailImage = styled(ThumbnailImage)`
  margin-right: -5px;
  z-index: 777;
`

export const Details = styled.div`
  & > div:first-child {
    display: flex;
    align-items: flex-end;
    max-width: 300px;
    gap: 8px;

    & > b {
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSize.m};
      color: ${({ theme }) => theme.colors.boldText};
    }
  }

  & > div:nth-child(2) {
    /* margin-top: 1px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .dot {
    color: ${({ theme }) => theme.colors.iconPrimary};
  }
`

export const StyledMoreInfoIcon = styled(MoreInfoIcon)`
  margin-left: auto;
  cursor: pointer;
  scale: 1.8;
  padding: 3px;
`

export const Tags = styled.section`
  ${Button} {
    background-color: ${({ theme }) => theme.colors.iconBg};
    border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
    color: ${({ theme }) => theme.colors.tagFont};
    margin: 11px 11px 0px 0;
  }
`

export const InteractionsSection = styled.section`
  display: flex;
  margin: 25px 0 10px 0;
  justify-content: space-between;

  ${Button} {
    display: flex;
    gap: 10px;
    align-items: center;
    color: ${({ theme }) => theme.colors.buttonFont};
  }
`

export const AttendingList = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  ${ThumbnailImage}:first-child {
    border: 3px solid ${({ theme }) => theme.colors.secondaryBg};
    z-index: 6;
    position: relative;
  }

  ${ThumbnailImage}:nth-child(2) {
    border: 3px solid ${({ theme }) => theme.colors.secondaryBg};
    position: relative;
    z-index: 5;
    transform: translateX(-10px);
  }

  ${ThumbnailImage}:nth-child(3) {
    border: 3px solid ${({ theme }) => theme.colors.secondaryBg};
    position: relative;
    z-index: 4;
    transform: translateX(-20px);
  }

  ${ThumbnailImage}:nth-child(4) {
    border: 3px solid ${({ theme }) => theme.colors.secondaryBg};
    position: relative;
    z-index: 3;
    transform: translateX(-30px);
  }

  ${ThumbnailImage}:nth-child(5) {
    border: 3px solid ${({ theme }) => theme.colors.secondaryBg};
    position: relative;
    z-index: 2;
    transform: translateX(-40px);
  }

  ${ThumbnailImage}:nth-child(6) {
    border: 3px solid ${({ theme }) => theme.colors.secondaryBg};
    position: relative;
    z-index: 1;
    transform: translateX(-50px);
  }
`

export const StyledSearchInput = styled(SearchInput)`
  margin: 30px 0 15px 0;
  width: clamp(40px, 100%, 650px);
  position: relative;

  & > svg {
    position: absolute;
    right: 20px;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
  }

  & > svg > path {
    stroke: ${({ theme }) => theme.colors.placeholder};
    fill: ${({ theme, isEmptyIcon }) => (isEmptyIcon ? 'default' : theme.colors.placeholder)};
  }

  &::before {
    position: absolute;
    content: '';
    top: -17px;
    left: 50%;
    width: 100%;
    height: 3px;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.mainDivider};
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
    font-weight: 300;
  }
`

export const AttendingCounter = styled.div`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.attendingCounterBg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -45px;
  border-radius: 50%;
  width: 23px;
  height: 23px;
  font-size: 11px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.boldText};
`

export const StyledText = styled(Text)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.placeholder};
  font-size: ${({ theme }) => theme.fontSize.s};
`

export const CommentSection = styled.section``
