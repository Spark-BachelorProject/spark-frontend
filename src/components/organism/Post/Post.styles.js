import styled from 'styled-components'

import { ReactComponent as MoreInfoIcon } from '@/assets/icons/three-dots.svg'
import { Button } from '@/components/atoms/Button/Button.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import SearchInput from '@/components/molecules/SearchInput/SearchInput'
import { Text } from '@/components/atoms/Text/Text.styles'
import { ReactComponent as UserCheckIcon } from '@/assets/icons/user-check.svg'

export const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  margin: 15px auto;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.postBorder};
  border-radius: 6px;

  ${Title} {
    line-height: 1.4;
    margin: 10px 0 15px 0;
  }
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 85% 0.1fr;

  align-items: center;
  margin: 0 0 10px 0;

  @media (min-width: ${({ theme }) => theme.breakPoints.mobile}) {
    grid-template-columns: 0.5fr 90% 0.1fr;
  }
`

export const Details = styled.div`
  & > div:first-child {
    display: flex;
    align-items: flex-end;
    width: 350px;
    gap: 5px;

    ${Text} {
      font-weight: 500;
      font-size: ${({ theme }) => theme.fontSize.sPlus};
    }

    & > b {
      cursor: pointer;
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSize.m};
      color: ${({ theme }) => theme.colors.boldText};
    }
  }

  & > div:nth-child(2) {
    width: 105px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${Text} {
      color: ${({ theme }) => theme.colors.text};
      font-size: ${({ theme }) => theme.fontSize.sPlus};
      font-weight: 500;
    }

    & > svg {
      height: 13px;
      width: 13px;
    }

    & > svg > path {
      stroke: ${({ theme }) => theme.colors.text};
    }
  }
`

export const StyledMoreInfoIcon = styled(MoreInfoIcon)`
  margin-left: auto;
  cursor: pointer;
  scale: 1.2;
  & path {
    stroke: ${({ theme }) => theme.colors.textHeader};
  }
`

export const Tags = styled.section`
  margin: 15px 0 0 0;

  ${Button} {
    padding: 7px 14px;
    background-color: ${({ theme }) => theme.colors.iconBg};
    border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
    font-size: ${({ theme }) => theme.fontSize.sPlus};

    color: ${({ theme }) => theme.colors.accent};
    margin: 12px 12px 0px 0;
    font-weight: 500;
  }

  ${Button}:hover {
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.navbarBorder};
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
    color: ${({ theme }) => theme.colors.buttonText};
    font-weight: 500;

    & > svg > path {
      stroke: ${({ theme }) => theme.colors.accent};
    }

    :hover {
      & > svg > path {
        transition: 200ms ease-in-out;
        stroke: ${({ theme }) => theme.colors.white};
      }
    }
  }
`

export const StyledSearchInput = styled(SearchInput)`
  margin: 30px 0 15px 0;
  width: auto !important;
  position: relative;

  & > svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
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

  & > input::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
    font-weight: 300;
  }
`

export const StyledText = styled(Text)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 500;

  & > svg {
    transition: transform 0.2s ease-in-out;
    transform: translate(2px, 1px)
      ${({ commentSectionIsOpen }) => (commentSectionIsOpen ? 'rotate(180deg)' : '')};
  }

  & > svg > path {
    color: ${({ theme }) => theme.colors.white};
  }
`

export const DetailsWrapper = styled.div`
  margin: 10px 0 0px 0;
  display: flex;
  align-items: center;

  ${Text} {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.text};
  }

  & > svg {
    height: 18px;
    width: 18px;
    margin-right: 10px;
  }

  & > svg > path {
    stroke: ${({ theme }) => theme.colors.text};
  }
`

export const CommentSection = styled.section`
  margin-top: 15px;
`
