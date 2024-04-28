import React from 'react'
import {
  Box,
  Button,
  Divider,
  Popover,
  SvgIconTypeMap,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import {
  AttachMoney,
  CreditCardOutlined,
  EmailOutlined,
  ShieldOutlined,
} from '@mui/icons-material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { logout } from '@/store/authSlice'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

interface HeaderPopoverInterface {
  anchorElPopover: HTMLDivElement | null
  handleClosePopover: () => void
}

interface MenuItemInterface {
  title: string
  text: string
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>
  iconColor: string
  bgColor: string
}

const menuItem = ({
  title,
  text,
  Icon,
  iconColor,
  bgColor,
}: MenuItemInterface) => {
  return (
    <>
      <Divider sx={{ borderColor: '#828690' }} />

      <Box
        sx={{
          display: 'flex',
          gap: '15px',
          ml: '15px',
          alignItems: 'center',
          mt: '20px',
          mb: '20px',
          '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.1)',
          },
          transition: 'transform .1s ease',
        }}
      >
        <Box
          sx={{
            bgcolor: bgColor,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px 15px',
            borderRadius: '15px',
          }}
        >
          <Icon sx={{ color: iconColor }} />
        </Box>
        <Box>
          <Typography>{title}</Typography>
          <Typography
            sx={{
              color: '#828690',
            }}
          >
            {text}
          </Typography>
        </Box>
      </Box>
    </>
  )
}

const HeaderPopover: React.FC<HeaderPopoverInterface> = ({
  anchorElPopover,
  handleClosePopover,
}) => {
  const dispatch = useDispatch()
  const open = Boolean(anchorElPopover)
  const id = open ? 'simple-popover' : undefined
  const { push } = useRouter()

  const items: MenuItemInterface[] = [
    {
      title: 'My Profile',
      text: 'Account settings',
      Icon: AttachMoney,
      iconColor: '#1bcedb',
      bgColor: '#e5fafb',
    },
    {
      title: 'My Inbox',
      text: 'Messages & Emails',
      Icon: ShieldOutlined,
      iconColor: '#33cea6',
      bgColor: '#ebfaf2',
    },
    {
      title: 'My Tasks',
      text: 'To-do and Daily Tasks',
      Icon: CreditCardOutlined,
      iconColor: '#e56d78',
      bgColor: '#fdf3f5',
    },
  ]

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorElPopover}
      onClose={handleClosePopover}
      slotProps={{
        paper: {
          sx: {
            marginTop: '20px',
            borderRadius: '30px',
            width: '300px',
            bgcolor: '#42464d',
            color: 'white',
            p: 2,
          },
        },
      }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Typography sx={{ p: 2, mb: '15px', fontSize: '18px' }}>
        User profile
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '20px',
          mb: '20px',
        }}
      >
        <Box
          sx={{
            width: '70px',
            height: '70px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: '#0e1517',
            borderRadius: '40px',
          }}
        >
          <Image
            src={'/img/avatar.jpg'}
            alt={'avatar'}
            width={50}
            height={50}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 'bold',
            }}
          >
            Julia Roberts
          </Typography>
          <Typography
            sx={{
              color: '#828690',
            }}
          >
            Administrator
          </Typography>
          <Box display={'flex'} gap={'10px'}>
            <EmailOutlined
              sx={{
                color: '#828690',
              }}
            />
            <Typography
              sx={{
                color: '#828690',
              }}
            >
              info@app.com
            </Typography>
          </Box>
        </Box>
      </Box>

      {items.map((item) => {
        return menuItem(item)
      })}

      <Button
        fullWidth
        sx={{
          bgcolor: '#04c9d7',
          color: 'white',
          '&:hover': {
            bgcolor: '#03adb9',
          },
        }}
        onClick={() => {
          handleClosePopover()
          dispatch(logout())
          window.localStorage.removeItem('isAuthenticated')
          push('/login')
        }}
      >
        Logout
      </Button>
    </Popover>
  )
}

export default HeaderPopover
