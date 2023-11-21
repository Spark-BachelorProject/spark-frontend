import userEvent from '@testing-library/user-event'
import { render, screen, waitFor, within } from 'test-utils'
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

  it('do not let go without fill required fields', () => {
    render(<CreatePost handleClose={vi.fn()} />)
    const submitButton = screen.getByText('Dalej')
    userEvent.click(submitButton)
    expect(screen.getByText('Dodawanie postu')).toBeInTheDocument()
  })

  it('do let go without fill required fields', async () => {
    // render(<CreatePost handleClose={vi.fn()} />)
    // const submitButton = screen.getByText('Dalej')
    // const inputTitle = screen.getByPlaceholderText('Tytuł spotkania')
    // const inputMap = screen.getByTestId('input-map')
    // userEvent.type(inputTitle, 'test')
    // userEvent.type(inputMap, 'L')
    // const { getAllByRole } =  within(listOfPlaces)
    // const items =  getAllByRole('listitem')
    // const firstOption = within(listOfPlaces).getAllByRole('option')[0]
    // userEvent.type(input, 'query') // replace 'query' with the actual query
    // Wait for the suggestions to appear in the DOM
    // let suggestions;
    // await waitFor(async () => {
    //   suggestions = await screen.findAllByRole('listitem');
    // }, { timeout: 5000 });
    // Select the first suggestion
    // const firstOption = suggestions[0]
    // await waitFor(() => {
    //   expect(screen.queryByText('Dalej')).not.toBeInTheDocument()
    // })
    // expect(screen.getByText('Dalej')).not.toBeInTheDocument()
  })

  it('allow select tags', async () => {
    // const result = render(<CreatePost handleClose={vi.fn()} />)
    // const inputTags = result.container.querySelector('#react-tags')
    // userEvent.click(inputTags)
    // const suggestions = await screen.findAllByRole('listitem')
    // screen.debug()
    // expect(screen.getByText(/Zaawansowany/i)).toBeInTheDocument()
  })
})
