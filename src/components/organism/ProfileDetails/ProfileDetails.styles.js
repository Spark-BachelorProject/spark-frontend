import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  width: 100%;
  max-height: content;
  padding: 20px;
  border-radius: 7px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 997px) {
    max-width: 300px;
  }
`

export const ImgAndNameSection = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  flex-direction: row;

  ${Thumbnail} {
    width: 70px;
    height: 70px;
    margin: 10px;
  }

  ${Title} {
    flex: 1;
    font-size: 24px;
    font-weight: 700;
  }

  &::before {
    position: absolute;
    content: '';
    bottom: -20px;
    left: 50%;
    width: 100%;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.mainDivider};
  }
`

export const StyledTitle = styled(Title)`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.m};
`

export const ActivitySection = styled.section`
  text-align: start;
  position: relative;
  width: 100%;
  padding-top: 40px;

  &::before {
    position: absolute;
    content: '';
    bottom: -30px;
    left: 50%;
    width: 100%;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.mainDivider};
  }
`

export const BadgesSection = styled.section`
  text-align: start;
  width: 100%;
  padding-top: 50px;
`

export const BadgesWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
`
