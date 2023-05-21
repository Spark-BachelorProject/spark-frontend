import React from 'react'

import GroupsHeader from '@/components/molecules/GroupsHeader/GroupsHeader'
import GroupCard from '@/components/organism/GroupCard/GroupCard'
import GroupsActionBar from '@/components/organism/GroupsActionBar/GroupsActionBar'
import { PageContent } from '@/components/templates/PageContent/PageContent'

import { GroupCardsSection, StyledTitleBar } from './Groups.styles'

const Groups = () => {
  return (
    <PageContent hasNavigation hasRightBar>
      <GroupsActionBar />
      <GroupsHeader />
      <StyledTitleBar>Mogą Cię zainteresować</StyledTitleBar>

      <GroupCardsSection>
        <GroupCard
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
        />
      </GroupCardsSection>

      <StyledTitleBar>Wszystkie</StyledTitleBar>
      <GroupCardsSection>
        <GroupCard
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
        />
        <GroupCard
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
        />
      </GroupCardsSection>
    </PageContent>
  )
}

export default Groups
