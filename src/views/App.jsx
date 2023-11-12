import { useGetUserQuery } from '@/store/api/user'

import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

function App() {
  const { data: user } = useGetUserQuery()

  return <>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>
}

export default App
