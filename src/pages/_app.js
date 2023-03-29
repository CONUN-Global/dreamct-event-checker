import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'
import store from '../store/store'
import '../styles/globals.css'
import { ThemeProvider } from '@mui/material'
import theme from '@/theme/theme'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  )
}

export default MyApp
