import { Box } from '@mui/material'
import React from 'react'
import {
  EmailContainer,
  Header,
  SettingsContainer,
  TabBar,
  TemplateContainer,
} from '@/components'

const MainContainer: React.FC = () => {
  const tabs = [
    { label: 'Emails', content: <EmailContainer /> },
    { label: 'Templates', content: <TemplateContainer /> },
    { label: 'Settings', content: <SettingsContainer /> },
  ]

  return (
    <Box
      sx={{
        width: '600px',
        height: '600px',
      }}
    >
      <Header />
      <TabBar tabs={tabs} />
    </Box>
  )
}

export default MainContainer
