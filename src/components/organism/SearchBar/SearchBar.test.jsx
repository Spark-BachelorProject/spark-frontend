import React from 'react'
import { Provider } from 'react-redux'

import userEvent from '@testing-library/user-event'
import configureStore from 'redux-mock-store'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { render, screen, waitFor } from 'test-utils'
import { vi } from 'vitest'

import { useGetGroupsQuery } from '@/store/api/groups'
import { useGetPostsQuery } from '@/store/api/posts'

import SearchBar from './SearchBar'

// vi.mock('react-router-dom', () => ({
//   ...vi.importActual('react-router-dom'),
//   useNavigate: () => vi.fn(),
// }))

vi.mock('@/store/api/posts', async () => {
  const actual = await vi.importActual('@/store/api/posts')
  return {
    ...actual,
    useGetPostsQuery: vi.fn(),
  }
})

vi.mock('@/store/api/groups', async () => {
  const actual = await vi.importActual('@/store/api/groups')
  return {
    ...actual,
    useGetGroupsQuery: vi.fn(),
  }
})

// const posts = [
//   {
//     id: 1,
//     content: 'I am a post',
//     visibilitySelect: 'Public',
//     activitySelect: 'Activity',
//     placesSelect: 'Place',
//     date: '2021-01-01',
//     time: '12:00',
//     tags: ['tag1', 'tag2'],
//     author: 'user1',
//     place: 'place1',
//   },
//   {
//     id: 2,
//     content: 'I am another post',
//     visibilitySelect: 'Public',
//     activitySelect: 'Activity',
//     placesSelect: 'Place',
//     date: '2021-01-02',
//     time: '13:00',
//     tags: ['tag1', 'tag3'],
//     author: 'user2',
//     place: 'place2',
//   },
//   {
//     id: 3,
//     content: 'I am a third post',
//     visibilitySelect: 'Public',
//     activitySelect: 'Activity',
//     placesSelect: 'Place',
//     date: '2021-01-03',
//     time: '14:00',
//     tags: ['tag2', 'tag4'],
//     author: 'user3',
//     place: 'place3',
//   },
//   {
//     id: 4,
//     content: 'I am a fourth post',
//     visibilitySelect: 'Public',
//     activitySelect: 'Activity',
//     placesSelect: 'Place',
//     date: '2021-01-04',
//     time: '15:00',
//     tags: ['tag3', 'tag4'],
//     author: 'user1',
//     place: 'place4',
//   },
// ]

describe('<SearchBar />', () => {
  beforeEach(() => {
    useGetPostsQuery.mockReturnValue({ data: [], isLoading: false })
    useGetGroupsQuery.mockReturnValue({ data: [], isLoading: false })
  })

  it('renders the search input', () => {
    const { getByPlaceholderText } = render(<SearchBar />)
    expect(getByPlaceholderText('Szukaj')).toBeInTheDocument()
  })

  it.only('on focus shows posts name and groups name', () => {
    useGetPostsQuery.mockReturnValue({
      data: [
        {
          id: 1,
          name: 'I am a post',
          content: 'I am a post',
          visibilitySelect: 'Public',
          activitySelect: 'Activity',
          placesSelect: 'Place',
          dateCreated: '2021-01-01',
          description: 'I am a post',
          time: '12:00',
          tags: ['tag1', 'tag2'],
        },
      ],
      isLoading: false,
    })
    useGetGroupsQuery.mockReturnValue({
      data: [
        {
          id: 1,
          name: 'I am a group',
          description: 'I am a group',
          dateCreated: '2021-01-01',
          tags: ['tag1', 'tag2'],
        },
      ],
      isLoading: false,
    })
    render(<SearchBar />)
    const searchInput = screen.getByPlaceholderText(/Szukaj/i)
    const labels = screen.getAllByText('Posty')

    userEvent.click(searchInput)

    console.log(screen.debug())

    console.log(labels)
  })

  // it('Displays message when there are no search results', async () => {
  //   const searchInput = screen.getByPlaceholderText(/Szukaj/i)
  //   userEvent.type(searchInput, 'i am not a post')

  //   await screen.findByText(/There are nothing with this title/i)
  // })

  // it('Displays items when you start typing', async () => {
  //   const searchInput = screen.getByPlaceholderText(/Szukaj/i)

  //   userEvent.type(searchInput, 'i am')

  //   await screen.findByText(/I am a post/i)
  //   await screen.findByText(/I am another/i)

  //   userEvent.clear(searchInput)

  //   userEvent.type(searchInput, 'i am another')
  //   await screen.findByText(/I am another/i)
  // })
})
