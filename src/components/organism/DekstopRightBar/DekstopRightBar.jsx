import React from 'react'
import { Wrapper } from './DekstopRightBar.styles'

import styled from 'styled-components'
import { SocialItem } from '@/components/molecules/SocialItem/SocialItem'
import { Title } from '@/components/atoms/Title/Title.styles'
import { Thumbnail } from '@/components/atoms/Thumbnail/Thumbnail.styles'

//TODO: Split this into files

export const Container = styled.div`
  padding: 10px 25px 15px 25px;
  border-radius: 5px;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.colors.postBorder};

  & > span {
    cursor: pointer;
    font-weight: 600;
    position: relative;
    top: 13px;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.text};
  }

  & > span:hover {
    font-weight: 700;

    color: ${({ theme }) => theme.colors.textHeader};
    transition: 100ms ease-in-out;
  }
`

export const StyledContainer = styled(Container)`
  padding: 10px 25px 30px 25px;
`

export const StyledTitle = styled(Title)`
  margin: 8px 0;
  font-size: ${({ theme }) => theme.fontSize.mPlus};
  font-weight: 600;
`

export const Person = styled.div`
  cursor: pointer;
  padding: 10px 0;
  display: flex;
  justify-content: start;
  align-items: center;
`

export const DekstopRightBar = () => {
  return (
    <Wrapper>
      <Container>
        <StyledTitle isBig isBold>
          Polecane Grupy
        </StyledTitle>
        <SocialItem TitleText="Pollub Hala" ActivityName="Futsal" Comment="Blisko Ciebie" />
        <SocialItem
          TitleText="Tenisowe Wariaty"
          ActivityName="Tenis"
          Comment="Duże zainteresowanie"
        />
        <SocialItem TitleText="Squash Po Piwie" ActivityName="Squash" Comment="Znajomi należą" />
      </Container>
      <Container>
        <StyledTitle isBig isBold>
          Sporty dla Ciebie
        </StyledTitle>
        <SocialItem ActivityName="Tenis" WeeklyPostCount={7} />
        <SocialItem ActivityName="Squash" WeeklyPostCount={6} />
      </Container>
      <StyledContainer>
        <StyledTitle isBig isBold>
          Znajomi
        </StyledTitle>
        <Person>
          <Thumbnail />
          <Title isBold>Andrzej Kowal</Title>
        </Person>
        <Person>
          <Thumbnail />
          <Title>Robert Pazurek</Title>
        </Person>
        <Person>
          <Thumbnail />
          <Title>Justyna Szewc</Title>
        </Person>
        <Person>
          <Thumbnail />
          <Title>Robert Wsad</Title>
        </Person>
        <Person>
          <Thumbnail />
          <Title>Julia Preska</Title>
        </Person>
        <span>Wszyscy</span>
      </StyledContainer>
    </Wrapper>
  )
}
