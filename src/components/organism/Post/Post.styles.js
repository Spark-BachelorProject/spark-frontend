import styled from 'styled-components'

import { ReactComponent as MoreInfoIcon } from '@/assets/icons/three-dots.svg'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

export const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  margin: 20px auto;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.postBorder};
  border-radius: 12px;

  @media (min-width: ${({ theme }) => theme.breakPoints.m}) {
    min-width: 684px;
  }

  ${Title} {
    line-height: 1.4;
    margin: 10px 0 15px 0;
    font-size: ${({ theme }) => theme.fontSize.l};
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

  & > img {
    height: 30px;
    width: 30px;
  }
`

export const Details = styled.div`
  margin-left: 10px;

  & > div:first-child {
    display: flex;
    align-items: flex-end;
    width: 350px;
    gap: 3px;
    margin-bottom: 3px;

    ${Text} {
      font-weight: 400;
      font-size: ${({ theme }) => theme.fontSize.xs};
      color: ${({ theme }) => theme.colors.grayDetails};
    }

    & > b {
      cursor: pointer;
      font-weight: 400;
      font-size: ${({ theme }) => theme.fontSize.xs};
      color: ${({ theme }) => theme.colors.grayDetails};
    }
  }

  & > div:nth-child(2) {
    width: fit-content;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;

    ${Text} {
      color: ${({ theme }) => theme.colors.titleFont};
      font-size: ${({ theme }) => theme.fontSize.xs};
      font-weight: 500;
    }

    & > img {
      height: 20px;
      width: 20px;
      margin-right: -3.5px;
    }

    & > svg {
      height: 13px;
      width: 13px;
    }

    & > svg > path {
      stroke: ${({ theme }) => theme.colors.grayDetails};
    }
  }
`

export const StyledMoreInfoIcon = styled(MoreInfoIcon)`
  margin-left: auto;
  cursor: pointer;
  scale: 1.1;
  & path {
    stroke: ${({ theme }) => theme.colors.text};
  }

  :hover {
    & path {
      stroke: ${({ theme }) => theme.colors.titleFont};
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0 0 0;

  & > p {
    color: ${({ theme }) => theme.colors.titleFont};
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 400;
  }
`

export const InteractionsSection = styled.section`
  display: flex;
  align-items: center;
  height: 45px;
  margin: 30px 0 10px 0;
  justify-content: space-between;
`

export const DetailsWrapper = styled.div`
  margin: 10px 0 0px 0;
  display: flex;
  align-items: center;

  ${Text} {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.sPlus};
    color: ${({ theme }) => theme.colors.titleFont};
  }

  & > svg {
    height: 18px;
    width: 18px;
    margin-right: 8px;
  }

  & > svg > path {
    stroke: ${({ theme }) => theme.colors.accent};
  }
`
export const ButtonsWrapper = styled.div`
  display: flex;
  height: 40px;
  gap: 15px;
`
