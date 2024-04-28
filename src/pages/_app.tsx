import '@/styles/globals.css'
import { Box } from '@mui/material'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import dynamic from 'next/dynamic'

const Middleware = dynamic(() => import('@/components/middleware/Middleware'), {
  ssr: false,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Middleware>
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Component {...pageProps} />
        </Box>
      </Middleware>
    </Provider>
  )
}
