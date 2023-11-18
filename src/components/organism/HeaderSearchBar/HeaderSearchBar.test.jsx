import * as router from 'react-router-dom'

import { waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render, screen } from 'test-utils'
import { vi } from 'vitest'

import { useGetGroupsQuery } from '@/store/api/groups'
import { useGetPostsQuery } from '@/store/api/posts'
import { store } from '@/store/store'
import { toggle } from '@/store/theme/themeSlice'

import HeaderSearchBar from './HeaderSearchBar'

vi.mock('@/components/organism/Popup/Popup', () => {
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

describe('<HeaderSearchBar />', () => {
  beforeEach(() => {
    useGetPostsQuery.mockReturnValue({ data: [], isLoading: false })
    useGetGroupsQuery.mockReturnValue({ data: [], isLoading: false })
    vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
  })

  it('renders without crashing', () => {
    render(<HeaderSearchBar />)

    expect(screen.getByPlaceholderText('Szukaj')).toBeInTheDocument()
  })

  it('on click logo navigate to /', async () => {
    render(<HeaderSearchBar />)

    const logo = screen.getByTestId('logo')
    userEvent.click(logo)

    await waitFor(() => {
      expect(window.location.pathname).toBe('/')
    })
  })

  it('on click open notification popup', async () => {
    render(<HeaderSearchBar />)

    const notificationWrapper = screen.getByTestId('notification-bell-wrapper')
    userEvent.click(notificationWrapper)

    await waitFor(() => {
      expect(screen.getByText('Powiadomienia')).toBeInTheDocument()
    })
  })

  it('on click open notification popup', async () => {
    render(<HeaderSearchBar />)

    const bookmarksWrapper = screen.getByTestId('bookmarks-wrapper')
    userEvent.click(bookmarksWrapper)

    await waitFor(() => {
      expect(screen.getByText('Zapisane aktywności')).toBeInTheDocument()
    })
  })

  it('on click change theme', async () => {
    const dispatchMock = vi.spyOn(store, 'dispatch')
    render(<HeaderSearchBar />)

    const themeWrapper = screen.getByTestId('theme-wrapper')
    userEvent.click(themeWrapper)

    await waitFor(() => {
      expect(dispatchMock).toHaveBeenCalled()
      expect(dispatchMock).toHaveBeenCalledWith(toggle())
    })
  })

  it('on click open profile popup', async () => {
    render(<HeaderSearchBar />)

    const profileWrapper = screen.getByTestId('profile-wrapper')
    userEvent.click(profileWrapper)

    await waitFor(() => {
      expect(screen.getByText(/Twój Profil/i)).toBeInTheDocument()
    })
  })

  it('on opened profile popup logout on click', async () => {
    render(<HeaderSearchBar />)

    const profileWrapper = screen.getByTestId('profile-wrapper')
    userEvent.click(profileWrapper)
    const logoutButton = await screen.findByText(/Wyloguj się/i)
    userEvent.click(logoutButton)

    await waitFor(() => {
      expect(window.location.pathname).toContain('/login')
    })
  })

  it('on opened profile popup navigate to profile page on click', async () => {
    render(<HeaderSearchBar />)

    const profileWrapper = screen.getByTestId('profile-wrapper')
    userEvent.click(profileWrapper)
    const profileButton = await screen.findByText(/Twój Profil/i)
    userEvent.click(profileButton)

    await waitFor(() => {
      expect(window.location.pathname).toContain('/profile')
    })
  })
})
