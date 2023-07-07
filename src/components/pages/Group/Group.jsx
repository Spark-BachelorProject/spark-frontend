import React from 'react'
import { useParams } from 'react-router'

import GroupsActionBar from '@/components/organism/GroupsActionBar/GroupsActionBar'
import Post from '@/components/organism/Post/Post'
import GroupTemplate from '@/components/templates/GroupTemplate/GroupTemplate'

const Group = () => {
  const { id } = useParams()
  const numOfPosts = 12

  return (
    <GroupTemplate>
      <GroupsActionBar
        numOfPosts={numOfPosts}
        groupName={id}
        hasFilters={false}
        buttonText={'Dodaj post'}
      />
      <Post />
      <Post />
      <Post />
    </GroupTemplate>
  )
}

export default Group
