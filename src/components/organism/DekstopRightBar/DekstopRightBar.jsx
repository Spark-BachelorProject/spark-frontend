import React from 'react'
import { Wrapper } from './DekstopRightBar.styles'
import { SocialItem } from '@/components/molecules/SocialItem/SocialItem'
import { Container, StyledContainer, StyledTitle, StyledSocialItem } from './DekstopRightBar.styles'
import { PersonListItem } from '@/components/molecules/PersonListItem/PersonListItem'

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
        <StyledSocialItem ActivityName="Tenis" WeeklyPostCount={7} />
        <SocialItem ActivityName="Squash" WeeklyPostCount={6} />
      </Container>
      <StyledContainer>
        <StyledTitle isBig isBold>
          Znajomi
        </StyledTitle>
        <PersonListItem name="Andrzej Kowal" />
        <PersonListItem name="Robert Pazurek" />
        <PersonListItem name="Justyna Szewc" />
        <PersonListItem name="Robert Wsad" />
        <PersonListItem name="Julia Preska" />
        <span>Wszyscy</span>
      </StyledContainer>
    </Wrapper>
  )
}
