import React from 'react'
import { useParams } from 'react-router'

import Loader from '@/components/atoms/Loader/Loader'
import GroupCard from '@/components/organism/GroupCard/GroupCard'
import { PageContent } from '@/components/templates/PageContent/PageContent'
import { useGetOneGroupQuery } from '@/store/api/groups'

import { StyledTitle } from './SingleGroup.styles'

//TODO: create new component for group
const SingleGroup = () => {
  const { id } = useParams()
  const { data: group, isLoading, isSuccess } = useGetOneGroupQuery(id)

  return (
    <PageContent hasRightBar hasNavigation>
      {isLoading && <Loader isCentered />}
      {id !== undefined && isSuccess && group ? (
        <GroupCard {...group} />
      ) : (
        <StyledTitle>Group not found</StyledTitle>
      )}
    </PageContent>
  )
}

export default SingleGroup
