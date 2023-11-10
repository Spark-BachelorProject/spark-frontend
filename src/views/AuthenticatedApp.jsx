import React from 'react'
import { Navigate, Route, Routes } from 'react-router'

import HeaderSearchBar from '@/components/organism/HeaderSearchBar/HeaderSearchBar'
import NavigationBar from '@/components/organism/NavigationBar/NavigationBar'
import SingleGroup from '@/components/organism/SingleGroup/SingleGroup'
import Groups from '@/components/pages/Groups/Groups'
import Home from '@/components/pages/Home/Home'
import Map from '@/components/pages/Map/Map'
import Profile from '@/components/pages/Profile/Profile'
import SinglePost from '@/components/pages/SinglePost/SinglePost'
import Users from '@/components/pages/Users/Users'

const AuthenticatedApp = () => {
  return (
    <>
      <HeaderSearchBar />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/groups/:id" element={<SingleGroup />} />
        <Route path="/map" element={<Map />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="/" element={<Home />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <NavigationBar />
    </>
  )
}

export default AuthenticatedApp
