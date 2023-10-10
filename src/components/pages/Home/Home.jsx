import React from 'react'
import { useSelector } from 'react-redux'

import { AddPostSection } from '@/components/molecules/AddPostSection/AddPostSection'
import { TitleBar } from '@/components/molecules/TitleBar/TitleBar'
import { Dropdown } from '@/components/organism/Dropdown/Dropdown'
import Post from '@/components/organism/Post/Post'
import { PageContent } from '@/components/templates/PageContent/PageContent'

const Home = () => {
  const posts = useSelector((state) => state.posts)
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
        />
      ))}
      <Post
        content="Ktoś chętny na grę w piłkę nożną?"
        author={'Kamil Żyła'}
        date={'2021-06-22'}
        tags={['Piłka nożna', 'Lublin', 'Konopnica']}
        time={'18:00'}
        place={'Konopnica'}
        activity={'Piłka nożna'}
      />
      <Post
        content="Piwo i flanki?"
        author={'Kamil Żyła'}
        date={'2021-10-9'}
        tags={['Piwo', 'Lublin', 'Konopnica']}
        time={'18:00'}
        place={'Lublin'}
        activity={'Piwo'}
      />
    </PageContent>
  )
}

export default Home
