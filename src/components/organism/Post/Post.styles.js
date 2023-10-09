import styled from 'styled-components'

import { ReactComponent as MoreInfoIcon } from '@/assets/icons/three-dots.svg'
import { Button } from '@/components/atoms/Button/Button.styles'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

export const Wrapper = styled.article`
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.03);
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
    padding: 8px 14px;
    background-color: ${({ theme }) => theme.colors.tagBg};
    border: 2px solid ${({ theme }) => theme.colors.tagBorder};

    & > svg > path {
      stroke: ${({ theme }) => theme.colors.accent};
    }
  }

  ${Button}:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.accent};
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
