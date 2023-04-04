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

export const Details = styled.div`
  & > div:first-child {
    display: flex;
    align-items: flex-end;
    width: 350px;
    gap: 8px;

    ${Text} {
      margin-bottom: 0.5px;
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
