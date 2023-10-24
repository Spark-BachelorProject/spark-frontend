import { Navigate, Route, Routes } from 'react-router'

import Groups from '@/components/pages/Groups/Groups'
import Home from '@/components/pages/Home/Home'
import Login from '@/components/pages/Login/Login'
import Map from '@/components/pages/Map/Map'
import Profile from '@/components/pages/Profile/Profile'
import Register from '@/components/pages/Register/Register'
import SinglePost from '@/components/pages/SinglePost/SinglePost'
import Users from '@/components/pages/Users/Users'
import { useGetPostsQuery } from '@/store/api/posts'

import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

//FIXME: On logout display login in proper way
function App() {
  const { data, isLoading } = useGetPostsQuery()

  console.log(data, isLoading)

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
        path="/groups"
        element={
          <AuthenticatedApp>
            <Groups />
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
        path="/map"
        element={
          <AuthenticatedApp>
            <Map />
          </AuthenticatedApp>
        }
      />
      <Route
        path="/posts/:id"
        element={
          <AuthenticatedApp>
            <SinglePost />
          </AuthenticatedApp>
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
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
