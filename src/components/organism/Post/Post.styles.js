import styled from 'styled-components'

import { ReactComponent as MoreInfoIcon } from '@/assets/icons/three-dots.svg'
import { Button } from '@/components/atoms/Button/Button.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import SearchInput from '@/components/molecules/SearchInput/SearchInput'

export const Wrapper = styled.article`
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
  grid-template-columns: 1fr 65% 1fr;
  align-items: center;
`
export const ThumbnailImage = styled.img`
  width: ${({ isBig }) => (isBig ? '34px' : '18px')};
  height: ${({ isBig }) => (isBig ? '34px' : '18px')};
  border-radius: 50%;
  margin-right: auto;
  background-color: aqua;
`
export const Details = styled.div`
  & > div:first-child {
    display: flex;
    align-items: flex-end;
    gap: 5px;

    & > b {
      font-size: ${({ theme }) => theme.fontSize.sPlus};
      color: ${({ theme }) => theme.colors.boldText};
    }
  }

  & > div:nth-child(2) {
    margin-top: 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .dot {
    color: ${({ theme }) => theme.colors.text};
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
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.buttonBorder};
    color: ${({ theme }) => theme.colors.text};
    margin: 5px 5px 5px 0;
  }
`

export const InteractionsSection = styled.section`
  display: flex;
  justify-content: space-between;

  ${Button} {
    display: flex;
    gap: 7px;
    align-items: center;
  }
`

export const Friends = styled.div`
  margin: 10px 0;

  /* ${ThumbnailImage}:not(:first-child) {
    background-color: black;
    transform: translate(-5px);
  } */
`

export const StyledSearchInput = styled(SearchInput)`
  margin: 30px 0 15px 0;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    top: -17px;
    left: 50%;
    width: 100%;
    height: 3px;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.divider};
  }
`
export const CommentSection = styled.section``
