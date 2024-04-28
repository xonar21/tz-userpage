import { KeyboardArrowDown } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { HeaderPopover } from '@/components'
import Image from 'next/image'
import { useSelector } from 'react-redux'

const Header: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: { auth: { isAuthenticated: boolean } }) =>
      state.auth.isAuthenticated
  )
  const [anchorElPopover, setAnchorElPopover] = useState<HTMLDivElement | null>(
    null
  )

  const handleOpenPopover = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorElPopover(event.currentTarget)
  }

  const handleClosePopover = () => {
    setAnchorElPopover(null)
  }

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: isAuthenticated ? 'space-between' : 'center',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Karantina !important',
          fontSize: '48px',
        }}
      >
        WIDE LOGO WIDE LOGO
      </Typography>

      {isAuthenticated && (
        <Box
          sx={{
            bgcolor: '#20232a',
            display: 'flex',
            gap: '10px',
            borderRadius: '45px',
            boxSizing: 'border-box',
            width: 'max-content',
            p: 2,
            alignItems: 'center',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={handleOpenPopover}
        >
          <Box
            sx={{
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              bgcolor: '#0e1517',
              borderRadius: '25px',
              overflow: 'hidden',
            }}
          >
            <Image
              src={'/img/avatar.jpg'}
              alt={'avatar'}
              width={30}
              height={30}
            />
          </Box>

          <Typography>
            Hi, <b>julia</b>
          </Typography>
          <KeyboardArrowDown
            sx={{
              rotate: anchorElPopover ? '180deg' : '0deg',
              transition: 'rotate .2s ease',
            }}
          />
        </Box>
      )}

      <HeaderPopover
        anchorElPopover={anchorElPopover}
        handleClosePopover={handleClosePopover}
      />
    </Box>
  )
}

export default Header
