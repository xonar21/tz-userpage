import React, { ReactElement, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const TabPanel = (props: {
  children?: React.ReactNode
  value: number
  index: number
}) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const TabBar = ({
  tabs,
}: {
  tabs: {
    label: string
    content: ReactElement
  }[]
}) => {
  const [value, setValue] = useState(0)

  const handleChange = (
    _event: React.SyntheticEvent<Element, Event>,
    newValue: number
  ) => {
    setValue(newValue)
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#04c9d7',
      },
    },
    components: {
      MuiTabs: {
        styleOverrides: {
          root: {
            width: 'max-content',
            border: '1px solid #04c9d7',
            borderRadius: 8,
            overflow: 'hidden',
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            backgroundColor: 'transparent',
            color: '#04c9d7',
            '&.Mui-selected': {
              backgroundColor: '#04c9d7',
              color: '#fff',
            },
            transition: 'all .5s ease',
          },
        },
      },
    },
  })

  return (
    <Box sx={{ width: '100%', mt: '40px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ThemeProvider theme={theme}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="primary"
            indicatorColor="secondary"
            sx={{
              '.MuiTabs-indicator': {
                display: 'none',
              },
            }}
          >
            {tabs.map((tab, index) => (
              <Tab label={tab.label} {...a11yProps(index)} key={index} />
            ))}
          </Tabs>
        </ThemeProvider>
      </Box>
      {tabs.map((tab, index) => (
        <TabPanel value={value} index={index} key={index}>
          {tab.content}
        </TabPanel>
      ))}
    </Box>
  )
}

export default TabBar
