import React from 'react'

import Loader from '@/components/atoms/Loader/Loader'
import GroupsHeader from '@/components/molecules/GroupsHeader/GroupsHeader'
import GroupCard from '@/components/organism/GroupCard/GroupCard'
import GroupsActionBar from '@/components/organism/GroupsActionBar/GroupsActionBar'
import { PageContent } from '@/components/templates/PageContent/PageContent'
import { useGetGroupsQuery } from '@/store/api/groups'

import { GroupCardsSection, StyledTitleBar } from './Groups.styles'

const Groups = () => {
  const { data: groups, isLoading } = useGetGroupsQuery()

  return (
    <PageContent hasNavigation hasRightBar>
      <GroupsActionBar />
      <GroupsHeader />
      <StyledTitleBar>Wszystkie</StyledTitleBar>
      {isLoading && <Loader isCentered />}
      <GroupCardsSection>
        {!isLoading && groups?.map((group) => <GroupCard key={group.id} {...group} />)}
      </GroupCardsSection>
    </PageContent>
  )
}

export default Groups
