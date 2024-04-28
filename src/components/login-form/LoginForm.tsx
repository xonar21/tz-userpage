import { Facebook, Google, Twitter } from '@mui/icons-material'
import { Box, Button, Divider, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { login } from '@/store/authSlice'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

const LoginForm: React.FC = () => {
  const [emailValue, setEmailValue] = useState('')
  const dispatch = useDispatch()
  const { push } = useRouter()

  const handleLogin = () => {
    dispatch(login())
    window.localStorage.setItem('isAuthenticated', 'true')
    push('/')
  }

  return (
    <Box
      sx={{
        padding: '20px 60px',
      }}
    >
      <Typography
        sx={{
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        Welcome to App
      </Typography>
      <Box sx={{ display: 'flex', gap: '10px', mb: '30px' }}>
        <Typography
          sx={{
            fontSize: '14px',
            color: '#828690',
          }}
        >
          New to App?
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            color: '#04c5d3',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          Create an account
        </Typography>
      </Box>

      <form>
        <Typography>Email Address</Typography>
        <TextField
          fullWidth
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          type="email"
          sx={{
            color: 'white',
            '.MuiInputBase-root': {
              color: 'white',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#31343b',
              },
              '&:hover fieldset': {
                borderColor: '#828690',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#04c5d3',
              },
            },
          }}
        />

        <Button
          fullWidth
          type="submit"
          onClick={handleLogin}
          sx={{
            bgcolor: '#fb9678',
            color: 'white',
            height: '42px',
            margin: '20px 0px',
            '&:hover': {
              bgcolor: '#f9b9a5',
            },
          }}
        >
          Sign In
        </Button>
      </form>

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Divider
          sx={{
            flex: 1,
            borderColor: '#30343a',
          }}
        />
        <Box
          sx={{
            bgcolor: '#31343b',
            padding: '1px 15px',
          }}
        >
          <Typography sx={{ fontSize: '12px', color: '#828690' }}>
            or sign in with
          </Typography>
        </Box>
        <Divider
          sx={{
            flex: 1,
            borderColor: '#30343a',
          }}
        />
      </Box>

      <Button
        fullWidth
        variant="outlined"
        startIcon={
          <Google
            sx={{
              color: '#e46a76',
            }}
          />
        }
        sx={{
          mt: '30px',
          borderColor: '#828690',
          height: '42px',
          color: '#828690',
          '&:hover': {
            borderColor: '#828690',
          },
        }}
      >
        Google
      </Button>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={
            <Facebook
              sx={{
                color: '#fb9678',
              }}
            />
          }
          sx={{
            mt: '15px',
            borderColor: '#828690',
            height: '42px',
            color: '#828690',
            '&:hover': {
              borderColor: '#828690',
            },
          }}
        >
          Facebook
        </Button>
        <Button
          fullWidth
          variant="outlined"
          startIcon={
            <Twitter
              sx={{
                color: '#04c9d7',
              }}
            />
          }
          sx={{
            mt: '15px',
            borderColor: '#828690',
            height: '42px',
            color: '#828690',
            '&:hover': {
              borderColor: '#828690',
            },
          }}
        >
          Twitter
        </Button>
      </Box>
    </Box>
  )
}

export default LoginForm
