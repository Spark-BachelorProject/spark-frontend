import { PageContent } from '@/components/templates/PageContent/PageContent'
import { Title } from '@/components/atoms/Title/Title.styles'
import React from 'react'
import { ContentDummy } from './Users.styles'

const Users = () => {
  return (
    <PageContent>
      <ContentDummy></ContentDummy>
      <Title isBig>Users</Title>
    </PageContent>
  )
}

export default Users
