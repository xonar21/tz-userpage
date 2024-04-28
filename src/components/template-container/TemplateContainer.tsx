import { Box, Chip, Typography } from '@mui/material'
import React from 'react'
import { DataGrid } from '@mui/x-data-grid'

const TemplateContainer: React.FC = () => {
  return (
    <DataGrid
      autoHeight
      sx={{
        border: 0,
        '& .MuiDataGrid-cell': {
          borderBottom: 'none',
        },
        '& .MuiDataGrid-columnSeparator': {
          display: 'none',
        },
        '& .MuiDataGrid-columnHeaders': {
          '& div': {
            background: '#33373E !important',
          },
          borderBottom: 'none',
        },
        '.MuiDataGrid-footerContainer': {
          display: 'none',
        },
        '.MuiDataGrid-columnHeader': {
          color: '#828690',
          p: 0,
        },
        '.MuiDataGrid-topContainer::after': {
          bgcolor: '#828690',
        },
        '.MuiDataGrid-overlay': {
          bgcolor: 'transparent',
          color: '#828690',
        },
        '.MuiDataGrid-row': {
          color: 'white',
        },
        '.MuiDataGrid-cell': {
          p: 0,
        },
      }}
      columns={[
        {
          field: 'name',
          headerName: 'Name',
          flex: 1,
          renderCell: (params) => (
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  fontWeight: 'bold',
                }}
              >
                {params.value}
              </Typography>
            </Box>
          ),
        },
        {
          field: 'emails',
          headerName: 'Emails',
          flex: 2,
          renderCell: (params) => {
            return (
              <Box
                sx={{
                  display: 'flex',
                  gap: '10px',
                  height: '100%',
                  alignItems: 'center',
                }}
                display={'flex'}
                gap={'5px'}
              >
                {params.value.map((item: string, index: number) => {
                  return (
                    <Chip
                      key={index}
                      label={item}
                      sx={{
                        borderRadius: '8px',
                        color: 'white',
                        bgcolor:
                          params.id === 3 || params.id === 4
                            ? '#fec90f'
                            : '#00c292',
                      }}
                    />
                  )
                })}
              </Box>
            )
          },
        },
      ]}
      rows={[
        {
          id: 1,
          name: 'Some template',
          emails: ['someemail@gmail.com', 'someemail2@gmail.com'],
        },
        {
          id: 2,
          name: 'Some template',
          emails: ['someotheremail@gmail.com'],
        },
        {
          id: 3,
          name: 'Some template',
          emails: ['somenonverifiedemail@gmail.com'],
        },
        {
          id: 4,
          name: 'Some template',
          emails: ['othernf@gmail.com'],
        },
        {
          id: 5,
          name: 'Some template',
          emails: ['verifiedgm@gmail.com'],
        },
      ]}
    />
  )
}

export default TemplateContainer
