import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

//FIXME: On logout display login in proper way
function App() {
  const isAuthenticated = localStorage.getItem('token')

  return <>{isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>
}

export default App
