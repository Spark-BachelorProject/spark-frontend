import { Route, Routes } from 'react-router'

import Home from '@/components/pages/Home/Home'
import Login from '@/components/pages/Login/Login'
import Profile from '@/components/pages/Profile/Profile'
import Register from '@/components/pages/Register/Register'
import Users from '@/components/pages/Users/Users'

import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

//FIXME: On logout display login in proper way
function App() {
  return (
    <Routes>
      <Route
        path="/users"
        element={
          <AuthenticatedApp>
            <Users />
          </AuthenticatedApp>
        }
      />
      <Route
        path="/profile"
        element={
          <AuthenticatedApp>
            <Profile />
          </AuthenticatedApp>
        }
      />
      <Route
        path="/login"
        element={
          <UnauthenticatedApp>
            <Login />
          </UnauthenticatedApp>
        }
      />
      <Route
        path="/register"
        element={
          <UnauthenticatedApp>
            <Register />
          </UnauthenticatedApp>
        }
      />
      <Route
        path="/"
        element={
          <AuthenticatedApp>
            <Home />
          </AuthenticatedApp>
        }
        exact
      />
    </Routes>
  )
}

export default App
