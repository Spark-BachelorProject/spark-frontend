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
      <StyledTitleBar>Mogą Cię zainteresować</StyledTitleBar>

      {/* //TODO: mogą cię zainteresować api call */}
      <GroupCardsSection>
        {/* <GroupCard
          name="UMCS"
          numOfPeople={3}
          text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque."
          tags={['Hala', 'Piłka Nożna']}
        />
        <GroupCard
          name="UMCS"
          numOfPeople={3}
          text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque."
          tags={['Hala', 'Piłka Nożna']}
        /> */}
      </GroupCardsSection>

      <StyledTitleBar>Wszystkie</StyledTitleBar>
      {isLoading && <Loader isCentered />}
      <GroupCardsSection>
        {!isLoading && groups?.map((group) => <GroupCard key={group.id} {...group} />)}
      </GroupCardsSection>
    </PageContent>
  )
}

export default Groups
