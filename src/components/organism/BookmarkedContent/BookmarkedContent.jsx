import Title from '@/components/atoms/Title/Title'
import React from 'react'
import { SavedPost } from '@/components/molecules/SavedPost/SavedPost'
import { Wrapper, HeadingWrapper, StyledMoreInfoIcon } from './BookmarkedContent.style'

export const BookmarkedContent = () => {
  return (
    <Wrapper>
      <HeadingWrapper>
        <Title isBig>Zapisane posty</Title>
        <StyledMoreInfoIcon />
      </HeadingWrapper>
      <SavedPost
        name="Andrzej Kowal"
        activity="Squash"
        place="Politechnika Lubelska"
        adress="Kraśnicka 21"
        isCancelled
      />
      <SavedPost
        name="Justyna Szec"
        activity="Nordic Walking"
        place="CSK Lublin"
        adress="Racławickie 14/12"
      />
      <SavedPost name="Krzysztof Raban" activity="Futsal" place="Hala UMCS" adress="Stepowa 12" />
      <SavedPost
        name="Krzysztof Raban"
        activity="Futsal"
        place="Hala UMCS"
        adress="Stepowa 12"
        isCancelled
      />
      <SavedPost name="Krzysztof Raban" activity="Futsal" place="Hala UMCS" adress="Stepowa 12" />
    </Wrapper>
  )
}
