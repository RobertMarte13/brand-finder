import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedProvaider ({ isAllowed, children, redirect = '/' }) {
  if (!isAllowed) {
    return <Navigate to={redirect} />
  }

  return children || <Outlet />
}

export default ProtectedProvaider
