import React from 'react'
import { Provider } from 'react-redux'

import userEvent from '@testing-library/user-event'
import configureStore from 'redux-mock-store'
import { render, screen, waitFor } from 'test-utils'

import SearchBar from './SearchBar'

const mockStore = configureStore([])

const posts = [
  {
    id: 1,
    content: 'I am a post',
    visibilitySelect: 'Public',
    activitySelect: 'Activity',
    placesSelect: 'Place',
    date: '2021-01-01',
    time: '12:00',
    tags: ['tag1', 'tag2'],
    author: 'user1',
    place: 'place1',
  },
  {
    id: 2,
    content: 'I am another post',
    visibilitySelect: 'Public',
    activitySelect: 'Activity',
    placesSelect: 'Place',
    date: '2021-01-02',
    time: '13:00',
    tags: ['tag1', 'tag3'],
    author: 'user2',
    place: 'place2',
  },
  {
    id: 3,
    content: 'I am a third post',
    visibilitySelect: 'Public',
    activitySelect: 'Activity',
    placesSelect: 'Place',
    date: '2021-01-03',
    time: '14:00',
    tags: ['tag2', 'tag4'],
    author: 'user3',
    place: 'place3',
  },
  {
    id: 4,
    content: 'I am a fourth post',
    visibilitySelect: 'Public',
    activitySelect: 'Activity',
    placesSelect: 'Place',
    date: '2021-01-04',
    time: '15:00',
    tags: ['tag3', 'tag4'],
    author: 'user1',
    place: 'place4',
  },
]

describe('<SearchBar />', () => {
  beforeEach(() => {
    const initialState = {
      posts: posts,
    }

    const store = mockStore(initialState)

    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    )

    const searchInput = screen.getByPlaceholderText(/Szukaj/i)
    userEvent.clear(searchInput)
  })

  it('Renders the search input', () => {
    const searchInput = screen.getByPlaceholderText(/Szukaj/i)

    expect(searchInput).toBeInTheDocument()
  })

  it('Displays message when there are no search results', async () => {
    const searchInput = screen.getByPlaceholderText(/Szukaj/i)
    userEvent.type(searchInput, 'i am not a post')

    await screen.findByText(/There are nothing with this title/i)
  })

  it('Displays items when you start typing', async () => {
    const searchInput = screen.getByPlaceholderText(/Szukaj/i)

    userEvent.type(searchInput, 'i am')

    await screen.findByText(/I am a post/i)
    await screen.findByText(/I am another/i)

    userEvent.clear(searchInput)

    userEvent.type(searchInput, 'i am another')
    await screen.findByText(/I am another/i)
  })
})
