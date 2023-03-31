import styled from 'styled-components'

import { ReactComponent as MoreInfoIcon } from '@/assets/icons/three-dots.svg'
import { Button } from '@/components/atoms/Button/Button.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import SearchInput from '@/components/molecules/SearchInput/SearchInput'
import { Text } from '@/components/atoms/Text/Text.styles'

export const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  margin: 15px auto;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.colors.postBorder};
  border-radius: 6px;

  ${Title} {
    line-height: 1.4;
    margin-top: 20px;
  }
`
export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 70% 1.7fr;
  align-items: center;
  margin: 0 0 10px 0;
`
export const ThumbnailImage = styled.img`
  cursor: pointer;
  width: ${({ isBig }) => (isBig ? '32px' : '30px')};
  height: ${({ isBig }) => (isBig ? '32px' : '30px')};
  border-radius: 60%;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.colors.buttonBorder};
  box-shadow: inset 0px 0px 1px #d2e2fd;
`

export const Details = styled.div`
  & > div:first-child {
    display: flex;
    align-items: flex-end;
    width: 350px;
    gap: 8px;

    ${Text} {
      margin: 0 0 0.5px 0; //działa, nie chce wiedzieć dlaczego
      font-size: ${({ theme }) => theme.fontSize.s};
    }

    & > b {
      cursor: pointer;
      font-weight: 500;
      font-size: ${({ theme }) => theme.fontSize.m};
      color: ${({ theme }) => theme.colors.boldText};
    }
  }

  & > div:nth-child(2) {
    /* margin-top: 1px; */
    width: 95px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${Text} {
      color: ${({ theme }) => theme.colors.boldText};
      font-size: ${({ theme }) => theme.fontSize.s};
    }

    & > svg > path {
      stroke: ${({ theme }) => theme.colors.text};
    }
  }

  .dot {
    color: ${({ theme }) => theme.colors.detailsFont};
    opacity: 0.6;
    scale: 0.7;
  }
`

export const StyledMoreInfoIcon = styled(MoreInfoIcon)`
  margin-left: auto;
  cursor: pointer;
  scale: 1.1;
  & path {
    stroke: ${({ theme }) => theme.colors.textHeader};
  }
`

export const Tags = styled.section`
  margin: 15px 0 0 0;

  ${Button} {
    padding: 6px 14px;
    background-color: ${({ theme }) => theme.colors.iconBg};
    border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
    color: ${({ theme }) => theme.colors.tagFont};
    margin: 12px 12px 0px 0;
    font-weight: 400;
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
  justify-content: start;
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
    transform: translateX(-20px);
  }

  ${ThumbnailImage}:nth-child(3) {
    border: 3px solid ${({ theme }) => theme.colors.secondaryBg};
    position: relative;
    z-index: 4;
    transform: translateX(-40px);
  }

  ${ThumbnailImage}:nth-child(4) {
    border: 3px solid ${({ theme }) => theme.colors.secondaryBg};
    position: relative;
    z-index: 3;
    transform: translateX(-60px);
  }

  ${ThumbnailImage}:nth-child(5) {
    border: 3px solid ${({ theme }) => theme.colors.secondaryBg};
    position: relative;
    z-index: 2;
    transform: translateX(-80px);
  }

  ${ThumbnailImage}:nth-child(6) {
    border: 3px solid ${({ theme }) => theme.colors.secondaryBg};
    position: relative;
    z-index: 1;
    transform: translateX(-100px);
  }
`

export const StyledSearchInput = styled(SearchInput)`
  margin: 30px 0 15px 0;
  width: auto !important;
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
  margin-left: -110px;
  border-radius: 50%;
  width: 23px;
  height: 23px;
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.boldText};
`

export const StyledText = styled(Text)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.placeholder};
  font-size: ${({ theme }) => theme.fontSize.s};
`

export const DetailsWrapper = styled.div`
  margin: 10px 0 0px 0;
  display: flex;
  justify-content: start;
  align-items: center;

  ${Text} {
    font-weight: 500;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.detailsFont};
  }

  svg {
    height: 14px;
    width: 14px;
    margin-right: 6px;
  }

  svg > path {
    stroke: ${({ theme }) => theme.colors.detailsFont};
  }
`

export const CommentSection = styled.section``
