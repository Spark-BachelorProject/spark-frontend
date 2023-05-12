import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

function App() {
  const user = false // it will be checking with some libraries

  return <>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>
}

export default App
