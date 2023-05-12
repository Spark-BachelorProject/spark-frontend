import React from 'react'
import { Route, Routes } from 'react-router'

import UnauthenticatedFooter from '@/components/molecules/UnauthenticatedFooter/UnauthenticatedFooter'
import Login from '@/components/pages/Login/Login'
import Register from '@/components/pages/Register/Register'
import UnauthenticatedContent from '@/components/templates/UnauthenticatedContent/UnauthenticatedContent'

const UnauthenticatedApp = () => {
  return (
    <UnauthenticatedContent>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Login />} />
      </Routes>
      <UnauthenticatedFooter />
    </UnauthenticatedContent>
  )
}

export default UnauthenticatedApp
