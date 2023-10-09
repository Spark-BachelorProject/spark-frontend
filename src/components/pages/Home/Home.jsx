import React from 'react'
import { useSelector } from 'react-redux'

import { AddPostSection } from '@/components/molecules/AddPostSection/AddPostSection'
import { TitleBar } from '@/components/molecules/TitleBar/TitleBar'
import { Dropdown } from '@/components/organism/Dropdown/Dropdown'
import Post from '@/components/organism/Post/Post'
import { PageContent } from '@/components/templates/PageContent/PageContent'

const Home = () => {
  const posts = useSelector((state) => state.posts)
  console.log(posts)
  return (
    <PageContent hasNavigation hasRightBar>
      <AddPostSection />
      <TitleBar>
        To się dzieje w <strong>Lublinie</strong>!
      </TitleBar>
      <Dropdown />
      {posts.map((post, i) => (
        <Post
          key={i}
          content={post.content}
          author={'Kamil Żyła'}
          date={post.date}
          tags={post.tags}
          time={post.time}
          place={post.place}
          activity={post.activity}
          howLongAgo={0}
        />
      ))}
      {/* <Post />
      <Post />
      <Post />
      <Post /> */}
    </PageContent>
  )
}

export default Home
