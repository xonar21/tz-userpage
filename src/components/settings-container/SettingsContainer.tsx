import { Box, FormControlLabel, Switch } from '@mui/material'
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiSwitch: {
      styleOverrides: {
        root: {
          '.Mui-disabled .MuiSwitch-thumb': {
            backgroundColor: '#757575',
          },
        },
        track: {
          backgroundColor: 'gray',
        },
        thumb: {
          backgroundColor: '#04c9d7',
        },
        switchBase: {
          color: '#fff',
          '&.Mui-checked': {
            color: '#fff',
          },
          '&.Mui-checked + .MuiSwitch-track': {
            backgroundColor: '#04c9d7',
          },
        },
      },
    },
  },
})

const renderSwitch = (isActive: boolean) => {
  return (
    <FormControlLabel
      disabled={!isActive}
      control={<Switch />}
      label={isActive ? 'Label' : 'Disabled'}
      sx={{
        '.MuiTypography-root': {
          color: `${isActive ? 'white' : '#757575'} !important`,
        },
      }}
    />
  )
}

const SettingsContainer: React.FC = () => {
  const items = [
    {
      isActive: true,
    },
    {
      isActive: true,
    },
    {
      isActive: true,
    },
    {
      isActive: true,
    },
    {
      isActive: false,
    },
  ]
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: '20px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            width: 'max-content',
          }}
        >
          {items.map((item) => {
            return renderSwitch(item.isActive)
          })}
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default SettingsContainer
