import { Html } from '@react-email/html'

const Email = ({ stars, feedback }) => {
  return (
    <Html lang="en">
      {stars}, {feedback}
    </Html>
  )
}

export default Email
