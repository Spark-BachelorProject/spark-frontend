import { PageContent } from '@/components/atoms/PageContent/PageContent'
import Title from '@/components/atoms/Title/Title'
import React from 'react'
import styled from 'styled-components'

export const ContentDummy = styled.div`
  width: 684px;
  padding: 10px 0;
`

const Users = () => {
  return (
    <PageContent>
      <ContentDummy></ContentDummy>
      <Title isBig>Users</Title>
    </PageContent>
  )
}

export default Users
