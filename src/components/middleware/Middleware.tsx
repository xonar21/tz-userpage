import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '@/store/authSlice'
import { useRouter } from 'next/router'

interface MiddlewareInterface {
  children: React.ReactNode
}

const Middleware: React.FC<MiddlewareInterface> = ({ children }) => {
  const { push, route } = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    if (window.localStorage.getItem('isAuthenticated')) {
      dispatch(login())
      push('/')
    } else {
      dispatch(logout())
      push('/login')
    }
  }, [])

  useEffect(() => {
    if (route === '/login') {
      document.body.style.backgroundColor = '#20232a'
    } else {
      document.body.style.backgroundColor = '#33373E'
    }
  }, [route])

  return <>{children}</>
}

export default Middleware
