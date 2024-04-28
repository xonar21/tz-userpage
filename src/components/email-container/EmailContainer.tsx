import { Person } from '@mui/icons-material'
import { Box, Chip, Typography } from '@mui/material'
import React from 'react'
import { DataGrid } from '@mui/x-data-grid'

const EmailContainer: React.FC = () => {
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
          field: 'email',
          headerName: 'Email',
          flex: 2,
          renderCell: (params) => (
            <Box
              sx={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <Person
                color={
                  params.id === 1
                    ? 'error'
                    : params.id === 2
                      ? 'warning'
                      : params.id === 3
                        ? 'primary'
                        : params.id === 4
                          ? 'secondary'
                          : params.id === 5
                            ? 'success'
                            : 'warning'
                }
              />
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
          field: 'status',
          headerName: 'Status',
          flex: 1,
          renderCell: (params) => (
            <Chip
              label={params.value}
              sx={{
                borderRadius: '8px',
                color: 'white',
                bgcolor: params.value === 'Verified' ? '#00c292' : '#fec90f',
              }}
            />
          ),
        },
      ]}
      rows={[
        {
          id: 1,
          email: 'someemail@gmail.com',
          status: 'Verified',
        },
        {
          id: 2,
          email: 'someemail@gmail.com',
          status: 'Verified',
        },
        {
          id: 3,
          email: 'someemail@gmail.com',
          status: 'Non-Verified',
        },
        {
          id: 4,
          email: 'someemail@gmail.com',
          status: 'Non-Verified',
        },
        {
          id: 5,
          email: 'someemail@gmail.com',
          status: 'Verified',
        },
      ]}
    />
  )
}

export default EmailContainer
