import { waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { screen, render } from 'test-utils'
import { vi } from 'vitest'

import { AddPostSection } from './AddPostSection'

vi.mock('@/components/organism/Modal/Modal', () => {
  return {
    __esModule: true,
    default: ({ children }) => {
      return <div>{children}</div>
    },
  }
})

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

describe('<AddPostSection />', () => {
  it('renders without crashing', () => {
    render(<AddPostSection />)

    expect(screen.getByText('Zaproś znajomych do gry!')).toBeInTheDocument()

    expect(screen.getByText('Dodaj')).toBeInTheDocument()
  })

  it('on click appear modal to create new post', async () => {
    render(<AddPostSection />)

    const button = screen.getByText('Dodaj')
    userEvent.click(button)

    await waitFor(() => {
      expect(screen.getByText('Dodawanie postu')).toBeInTheDocument()
    })
  })
})
