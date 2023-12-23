import { Navigate, Route, Routes } from 'react-router'

import Login from '@/components/pages/Login/Login'
import Register from '@/components/pages/Register/Register'
import UnauthenticatedContent from '@/components/templates/UnauthenticatedContent/UnauthenticatedContent'

const UnauthenticatedApp = () => {
  return (
    <UnauthenticatedContent>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </UnauthenticatedContent>
  )
}

export default UnauthenticatedApp
