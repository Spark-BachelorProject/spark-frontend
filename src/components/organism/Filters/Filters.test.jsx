import { waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render, screen } from 'test-utils'
import { vi } from 'vitest'

import Filters from './Filters'

describe('Filters', () => {
  const handleClose = vi.fn()
  const setFilterOptions = vi.fn()

  beforeEach(() => {
    render(<Filters handleClose={handleClose} setFilterOptions={setFilterOptions} />)
  })

  it('renders correctly', () => {
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('W godzinach')).toBeInTheDocument()
    expect(screen.getByText('Data')).toBeInTheDocument()
  })

  it('inputs set to current time', () => {
    const hourStartInput = screen.getByLabelText('hour-start')
    const hourEndInput = screen.getByLabelText('hour-end')

    const currentTime = new Date().toLocaleTimeString('pl-PL', {
      hour: '2-digit',
      minute: '2-digit',
    })

    expect(hourStartInput.value).toBe(currentTime)
    expect(hourEndInput.value).toBe(currentTime)
  })

  it('show error when start time is the same than end time after try to submit', async () => {
    const hourStartInput = screen.getByLabelText('hour-start')
    const hourEndInput = screen.getByLabelText('hour-end')
    const submitButton = screen.getByRole('button', { name: /zapisz/i })

    userEvent.type(hourStartInput, '12:00')
    userEvent.type(hourEndInput, '12:00')
    userEvent.click(submitButton)

    await waitFor(() => {
      expect(
        screen.queryByText(/Czas rozpoczenia nie może być później niż zakończenia/i)
      ).toBeInTheDocument()
    })
  })

  it('show error when start time is the later than end time after try to submit', async () => {
    const hourStartInput = screen.getByLabelText('hour-start')
    const hourEndInput = screen.getByLabelText('hour-end')
    const submitButton = screen.getByRole('button', { name: /zapisz/i })

    userEvent.type(hourStartInput, '12:00')
    userEvent.type(hourEndInput, '11:00')
    userEvent.click(submitButton)

    await waitFor(() => {
      expect(
        screen.queryByText(/Czas rozpoczenia nie może być później niż zakończenia/i)
      ).toBeInTheDocument()
    })
  })

  it('show error when start time is the same or later than end time after try to submit and after changing this to correct data error should disappear', async () => {
    const hourStartInput = screen.getByLabelText('hour-start')
    const hourEndInput = screen.getByLabelText('hour-end')
    const submitButton = screen.getByRole('button', { name: /zapisz/i })

    userEvent.type(hourStartInput, '12:00')
    userEvent.type(hourEndInput, '11:00')
    userEvent.click(submitButton)

    await waitFor(() => {
      expect(
        screen.queryByText(/Czas rozpoczenia nie może być później niż zakończenia/i)
      ).toBeInTheDocument()
    })

    userEvent.type(hourEndInput, '13:00')
    await waitFor(() => {
      expect(
        screen.queryByText(/Czas rozpoczenia nie może być później niż zakończenia/i)
      ).not.toBeInTheDocument()
    })
  })
})
