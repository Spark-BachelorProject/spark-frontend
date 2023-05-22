import { Route, Routes } from 'react-router-dom'

import HeaderSearchBar from '@/components/organism/HeaderSearchBar/HeaderSearchBar'
import NavigationBar from '@/components/organism/NavigationBar/NavigationBar'
import Group from '@/components/pages/Group/Group'
import Groups from '@/components/pages/Groups/Groups'
import Home from '@/components/pages/Home/Home'
import Login from '@/components/pages/Login/Login'
import Profile from '@/components/pages/Profile/Profile'

function App() {
  return (
    <>
      <HeaderSearchBar />
      <Routes>
        <Route path="/groups" element={<Groups />} />
        <Route path="/groups/:id?" element={<Group />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} exact />
        <Route path="/" element={<Home />} exact />
      </Routes>
      <NavigationBar />
    </>
  )
}

export default App
