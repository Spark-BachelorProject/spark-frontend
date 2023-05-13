import React from 'react'

import styled from 'styled-components'

import { PageContent } from '@/components/templates/PageContent/PageContent'

export const ContentDummy = styled.div`
  width: 684px;
`

const Users = () => {
  return (
    <PageContent hasNavigation hasRightBar>
      <ContentDummy>Grupy</ContentDummy>
    </PageContent>
  )
}

export default Users
