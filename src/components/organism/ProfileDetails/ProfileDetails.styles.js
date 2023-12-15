import styled from 'styled-components'

import { ReactComponent as SettingsIcon } from '@/assets/icons/settings.svg'
import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

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
    max-width: 310px;
  }
`

export const ImgAndNameSection = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  flex-direction: column;

  ${Thumbnail} {
    width: 100px;
    height: 100px;
    margin: 10px;
  }

  ${Title} {
    margin: 15px 0;
    font-size: 20px;
    font-weight: 600;
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

  @media screen and (max-width: 997px) {
    flex-direction: column;
  }
`

export const StyledTitle = styled(Title)`
  font-weight: 500;
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

export const FavoriteSection = styled.section`
  text-align: start;
  width: 100%;
  padding-top: 50px;

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

export const EditWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const StyledSettingsIcon = styled(SettingsIcon)`
  width: 13px;
  height: 13px;
  cursor: pointer;
  & > path {
    stroke: ${({ theme }) => theme.colors.white};
  }
`
