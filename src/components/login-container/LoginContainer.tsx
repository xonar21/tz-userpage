import { Box } from '@mui/material'
import React from 'react'
import { Header, LoginForm } from '@/components'

const LoginContainer: React.FC = () => {
  return (
    <Box
      sx={{
        width: '600px',
        height: '600px',
      }}
    >
      <Header />
      <LoginForm />
    </Box>
  )
}

export default LoginContainer
