import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

// client ID 1018465811730-prs9cp8c8ob35hrcagvqt6qs8bg44g1p.apps.googleusercontent.com
// client secret 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
function App() {
  const user = false // it will be checking with some libraries

  return <>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>
}

export default App
