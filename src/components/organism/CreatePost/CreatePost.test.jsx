import { render, screen } from 'test-utils'
import { vi } from 'vitest'

import CreatePost from './CreatePost'

vi.mock('@/store/api/posts', async () => {
  const actual = await vi.importActual('@/store/api/posts')
  return {
    ...actual,
    useAddPostMutation: () => [vi.fn()],
  }
})

vi.mock('@/store/api/activities', async () => {
  const actual = await vi.importActual('@/store/api/activities')
  return {
    ...actual,
    useGetActivitiesQuery: () => ({ data: [], isLoading: false }),
  }
})

vi.mock('@/store/api/tags', async () => {
  const actual = await vi.importActual('@/store/api/tags')
  return {
    ...actual,
    useGetTagsQuery: () => ({ data: [] }),
  }
})

vi.mock('@/store/api/user', async () => {
  const actual = await vi.importActual('@/store/api/user')
  return {
    ...actual,
    useGetUserQuery: () => ({ data: {}, isLoadingUser: false }),
  }
})

describe('<CreatePost />', () => {
  it('renders without crashing', () => {
    render(<CreatePost handleClose={vi.fn()} />)
    expect(screen.getByText('Dodawanie postu')).toBeInTheDocument()
  })
})
