import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useData } from '@hooks'

const RequireAuth = () => {
  const { auth } = useData()
  const location = useLocation()
  return auth?.accessToken ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  )
}

export default RequireAuth
