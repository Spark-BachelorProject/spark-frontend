import React from 'react'

import { ReactComponent as UsersIcon } from '@/assets/icons/users.svg'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'

import { IconAndLabel, IconBackground, Wrapper } from './SimilarGroups.styles'

//TODO: seperate to other file
const SimilarGroups = () => {
  return (
    <Wrapper>
      <Title isBig isBold>
        Podobne grupy
      </Title>
      <IconAndLabel>
        <IconBackground>
          <UsersIcon />
        </IconBackground>
        <div>
          <Title isBig isBold>
            Węglin Spacery
          </Title>
          <Text>12 czlonkow</Text>
        </div>
      </IconAndLabel>
      <IconAndLabel>
        <IconBackground>
          <UsersIcon />
        </IconBackground>
        <div>
          <Title isBig isBold>
            Węglin Spacery
          </Title>
          <Text>12 czlonkow</Text>
        </div>
      </IconAndLabel>
      <IconAndLabel>
        <IconBackground>
          <UsersIcon />
        </IconBackground>
        <div>
          <Title isBig isBold>
            Węglin Spacery
          </Title>
          <Text>12 czlonkow</Text>
        </div>
      </IconAndLabel>
    </Wrapper>
  )
}

export default SimilarGroups
