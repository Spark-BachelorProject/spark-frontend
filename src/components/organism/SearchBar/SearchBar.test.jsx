import * as router from 'react-router-dom'

import userEvent from '@testing-library/user-event'
import { render, screen } from 'test-utils'
import { vi } from 'vitest'

import { useGetGroupsQuery } from '@/store/api/groups'
import { useGetPostsQuery } from '@/store/api/posts'

import SearchBar from './SearchBar'

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

const navigate = vi.fn()
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => navigate,
  }
})

const examplePosts = [
  {
    id: 1,
    description: 'I am a post',
    dateCreated: '2021-01-01',
  },
  {
    id: 2,
    description: 'I am another post',
    dateCreated: '2021-01-01',
  },
]

const exampleGroups = [
  {
    id: 1,
    name: 'I am a group',
  },
  {
    id: 2,
    name: 'I am another group',
  },
]

describe('<SearchBar />', () => {
  beforeEach(() => {
    useGetPostsQuery.mockReturnValue({ data: [], isLoading: false })
    useGetGroupsQuery.mockReturnValue({ data: [], isLoading: false })
    vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
  })

  it('renders the search input', () => {
    const { getByPlaceholderText } = render(<SearchBar />)
    expect(getByPlaceholderText('Szukaj')).toBeInTheDocument()
  })

  it('on focus shows posts and groups name', () => {
    useGetPostsQuery.mockReturnValue({
      data: examplePosts,
      isLoading: false,
    })
    useGetGroupsQuery.mockReturnValue({
      data: exampleGroups,
      isLoading: false,
    })
    render(<SearchBar />)

    const searchInput = screen.getByPlaceholderText(/Szukaj/i)
    userEvent.click(searchInput)

    const postName1 = screen.getByText(/I am a post/i)
    const postName2 = screen.getByText(/I am another post/i)
    const groupName1 = screen.getByText(/I am a group/i)
    const groupName2 = screen.getByText(/I am another group/i)

    expect(postName1).toBeInTheDocument()
    expect(postName2).toBeInTheDocument()
    expect(groupName1).toBeInTheDocument()
    expect(groupName2).toBeInTheDocument()
  })

  it('on typing shows less results', async () => {
    useGetPostsQuery.mockReturnValue({
      data: examplePosts,
      isLoading: false,
    })
    useGetGroupsQuery.mockReturnValue({
      data: exampleGroups,
      isLoading: false,
    })
    render(<SearchBar />)

    const searchInput = screen.getByPlaceholderText(/Szukaj/i)
    userEvent.type(searchInput, 'i am an')

    expect(await screen.findByText(/I am another post/i)).toBeInTheDocument()
    expect(await screen.findByText(/I am another group/i)).toBeInTheDocument()
  })

  it('after click on post name navigates to post page', async () => {
    useGetPostsQuery.mockReturnValue({
      data: examplePosts,
      isLoading: false,
    })
    useGetGroupsQuery.mockReturnValue({
      data: exampleGroups,
      isLoading: false,
    })

    render(<SearchBar />)

    const searchInput = screen.getByPlaceholderText(/Szukaj/i)
    userEvent.click(searchInput)

    const post1 = screen.getByText(/I am a post/i)

    await userEvent.click(post1)

    expect(navigate).toHaveBeenCalledWith('/posts/1')
  })

  it('after click on group name navigates to group page', async () => {
    useGetPostsQuery.mockReturnValue({
      data: examplePosts,
      isLoading: false,
    })
    useGetGroupsQuery.mockReturnValue({
      data: exampleGroups,
      isLoading: false,
    })

    render(<SearchBar />)

    const searchInput = screen.getByPlaceholderText(/Szukaj/i)
    userEvent.click(searchInput)

    const group1 = screen.getByText(/I am a group/i)

    await userEvent.click(group1)

    expect(navigate).toHaveBeenCalledWith('/groups/1')
  })

  it('when there is no results shows no results message', async () => {
    useGetPostsQuery.mockReturnValue({
      data: [],
      isLoading: false,
    })
    useGetGroupsQuery.mockReturnValue({
      data: [],
      isLoading: false,
    })

    render(<SearchBar />)

    const searchInput = screen.getByPlaceholderText(/Szukaj/i)
    userEvent.click(searchInput)

    expect(await screen.findByText(/Nie ma postów ani grup o takiej nazwie/i)).toBeInTheDocument()
  })
})
