import React from 'react'

import Loader from '@/components/atoms/Loader/Loader'
import { Text } from '@/components/atoms/Text/Text.styles'
import { Title } from '@/components/atoms/Title/Title.styles'
import { SocialItem } from '@/components/molecules/SocialItem/SocialItem'
import { useGetOwnedGroupsQuery } from '@/store/api/groups'

import { Wrapper } from './SocialsSection.styles'

const SocialsSection = () => {
  const { data: ownedGroups, isLoading, isSuccess } = useGetOwnedGroupsQuery()

  return (
    <Wrapper>
      <Title isBig isBold>
        Twoje Grupy
      </Title>
      {isLoading ? <Loader isCentered /> : null}
      {!isLoading && isSuccess && !ownedGroups.length && (
        <Text isBig isBold>
          Nie masz żadnych grup
        </Text>
      )}
      {!isLoading &&
        isSuccess &&
        ownedGroups.map((group) => <SocialItem key={group.id} {...group} />)}
    </Wrapper>
  )
}

export default SocialsSection
