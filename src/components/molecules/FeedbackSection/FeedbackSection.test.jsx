import { render, screen } from 'test-utils'

import { FeedbackSection } from './FeedbackSection'

describe('FeedbackSection', () => {
  it('Renders without errors', () => {
    render(<FeedbackSection />)

    screen.getByText('Napisz feedback')
  })
})
