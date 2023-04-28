import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import React from 'react'
import styled from 'styled-components'
import Tags from '@/components/atoms/Tags/Tags'
import Badge from '@/components/atoms/Badge/Badge'
import { ReactComponent as BellIcon } from '@/assets/icons/bell.svg'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  // TODO: Change this
  /* max-width: 300px;
  max-height: 700px;
  min-width: 290px;
  min-height: 70vh; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const ImgAndNameWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  flex-direction: row;

  ${Thumbnail} {
    width: 70px;
    height: 70px;
    margin: 15px;
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

export const ActivityWrapper = styled.div`
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

export const BadgesWrapper = styled.div`
  text-align: start;
  width: 100%;
  padding-top: 50px;
`

const ProfileDetails = () => {
  return (
    <Wrapper>
      <ImgAndNameWrapper>
        <Thumbnail />
        <Title>Justyna Szewc</Title>
      </ImgAndNameWrapper>
      <ActivityWrapper>
        <StyledTitle>Ulubione aktywności</StyledTitle>
        <Tags>{['Gramy na luzie', 'Jeszcze 2 miejsca', 'Potem na harnasia']}</Tags>
      </ActivityWrapper>
      <BadgesWrapper>
        <StyledTitle>Odznaki</StyledTitle>
        <Badge Icon={BellIcon}>najlepszy team</Badge>
      </BadgesWrapper>
    </Wrapper>
  )
}

export default ProfileDetails
