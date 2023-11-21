import userEvent from '@testing-library/user-event'
import { render, screen, within, waitFor } from 'test-utils'
import { vi } from 'vitest'

import { Dropdown } from './Dropdown'

const mockedActivities = [
  {
    id: 1,
    name: 'Piłka nożna',
    description: 'Gra w piłkę nożną',
    category: {
      id: 1,
      name: 'Sport',
    },
    tags: [],
    attributes: [],
  },
  {
    id: 2,
    name: 'Siatkówka',
    description: 'Gra w siatkówkę',
    category: {
      id: 1,
      name: 'Sport',
    },
    tags: [],
    attributes: [],
  },
  {
    id: 3,
    name: 'Koszykówka',
    description: 'Gra w koszykówkę',
    category: {
      id: 1,
      name: 'Sport',
    },
    tags: [],
    attributes: [],
  },
  {
    id: 4,
    name: 'Kino',
    description: 'Wyjście do kina',
    category: {
      id: 2,
      name: 'Rekreacja',
    },
    tags: [],
    attributes: [],
  },
]

vi.mock('@/store/api/activities', async () => {
  const actual = await vi.importActual('@/store/api/activities')
  return {
    ...actual,
    useGetActivitiesQuery: () => ({ data: mockedActivities, isLoading: false }),
  }
})

describe('Dropdown', () => {
  it('renders without crashing', () => {
    render(<Dropdown setFilterOptions={() => {}} filterOptions={{}} />)
  })

  it('initializes with the correct activities state', async () => {
    render(<Dropdown setFilterOptions={() => {}} filterOptions={{}} />)

    const selectElement = await screen.findByRole('combobox')
    const options = await within(selectElement).findAllByRole('option')

    expect(options).toHaveLength(5)
    expect(options[0].value).toBe('Wszystkie')
  })

  it('updates state when an option is selected', async () => {
    render(<Dropdown setFilterOptions={() => {}} filterOptions={{}} />)

    const selectElement = await screen.findByRole('combobox')
    const options = await within(selectElement).findAllByRole('option')

    userEvent.selectOptions(selectElement, [options[1].value])
    await waitFor(() => {
      expect(selectElement.value).toBe(options[1].value)
    })
  })

  it('displays filterOptions when passed', async () => {
    const filterOptions = {
      start: '2022-01-01T00:00',
      end: '2022-01-01T23:59',
    }
    render(<Dropdown setFilterOptions={() => {}} filterOptions={filterOptions} />)

    const filterButton = screen.getByRole('button', { name: /23:59/ })

    expect(filterButton).toBeInTheDocument()
  })
})
