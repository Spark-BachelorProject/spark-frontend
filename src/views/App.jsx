import { Route, Routes } from 'react-router-dom'

import HeaderSearchBar from '@/components/organism/HeaderSearchBar/HeaderSearchBar'
import NavigationBar from '@/components/organism/NavigationBar/NavigationBar'
import Home from '@/components/pages/Home/Home'
import Login from '@/components/pages/Login/Login'
import Profile from '@/components/pages/Profile/Profile'
import Users from '@/components/pages/Users/Users'

function App() {
  return (
    <>
      <HeaderSearchBar />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} exact />
        <Route path="/" element={<Home />} exact />
      </Routes>
      <NavigationBar />
    </>
  )
}

export default App
